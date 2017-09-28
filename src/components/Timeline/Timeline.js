import React, { Component } from 'react'
import data , { transformData } from './data'
import * as d3 from 'd3'
import moment from 'moment'

import './Timeline.css'

const NOW = '2017-09-20 15:59'
const OPERATIONWIDTH = 100
const PLANNEDWIDTH = 10
const STROKEWIDTH = 2
const OPERATIONPADDING = 0.1
const THEATERBARHEIGHT = 30
const TIMEBARWIDTH = 40

const translate = (x, y) => {
	return 'translate('+x+','+y+')'
}

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.container = null
	}

	componentDidMount() {
		const theaters = data.theaters
		const operations = transformData(data)

		let xDomain = theaters.length *(OPERATIONWIDTH + OPERATIONWIDTH*OPERATIONPADDING)

		const height = window.innerHeight - this.container.offsetTop - THEATERBARHEIGHT
		const svg = d3.select(this.container).append('svg')
			.attr('width', '100%')
			.attr('height', height)
		
		let canScrollX = true
		
		const width = svg.node().getBoundingClientRect().width

		// If screen is big enough to fit all the operations, strech to fit
		if(xDomain < width - TIMEBARWIDTH) {
			xDomain = width + TIMEBARWIDTH
			canScrollX = false
		}

		// x-axis zoom
		const xZoom = d3.zoom()
			.extent([[0, 0], [(width), height]])
			.scaleExtent([1, 1])
			.translateExtent([[0, 0], [xDomain-TIMEBARWIDTH, 0]])
			.on('zoom', xZoomed)

		// x-axis scale
		const x = d3.scaleBand()
			.domain(theaters.map(theater => theater.id))
			.rangeRound([TIMEBARWIDTH, xDomain-TIMEBARWIDTH-10])
			.paddingInner(OPERATIONPADDING)
			.paddingOuter(0.2)

		// x-axis
		const xAxis = d3.axisTop(x)
			.tickPadding(-20)
			.tickSizeInner(0)
			.tickFormat(val => theaters.find(theater => theater.id === val).name)
		
		// y-axis zoom
		const yZoom = d3.zoom()
			.extent([[0, 0], [(width), height]])
			.scaleExtent([1, 15])
			.translateExtent([[0, 0], [0, height]])
			.on('zoom', yZoomed)
	
		// y-axis scale
		const y = d3.scaleTime()
			.domain([moment(NOW).startOf('day'), moment(NOW).endOf('day')])
			.range([0, height-THEATERBARHEIGHT-1])
	
		// y-axis
		const yAxis = d3.axisLeft(y)
			.ticks(20)
			.tickFormat(d3.timeFormat('%H:%M'))
		
		const yLines = d3.axisLeft(y)
			.ticks(20)
			.tickFormat('')
			.tickSize(-width)
		
		// rectangles representing operations
		const operationGroup = svg.append('g')
			.attr('transform', translate(0, THEATERBARHEIGHT))
			.selectAll('rect')
			.data(operations)
			.enter()
		
		// Actual time spend
		const actualRects = operationGroup.append('rect')
			.attr('x', data => x(data.theater))
			.attr('y', data => y(moment(data.startTime)))
			.attr('width', x.bandwidth())
			.attr('height', data => (y(moment(data.endTime || NOW)) - y(moment(data.startTime))))
			.attr('fill', 'green')
		
		// Planned time
		const plannedRects = operationGroup.append('rect')
			.attr('x', data => x(data.theater) + x.bandwidth() - PLANNEDWIDTH - STROKEWIDTH/2)
			.attr('y', data => y(moment(data.plannedStartTime)))
			.attr('width', PLANNEDWIDTH)
			.attr('height', data => (y(moment(data.plannedEndTime)) - y(moment(data.plannedStartTime))))
			.attr('fill', 'white')
			.attr('stroke-width', STROKEWIDTH)
			.attr('stroke', 'lightgrey')
	
		// x-axis group
		const xGroup = svg.append('g')
			.attr('class', 'Timeline-axis Timeline-axis--x')
		// overlay
		xGroup.append('rect')
			.attr('width', width)
			.attr('height', THEATERBARHEIGHT)
			.attr('fill', 'white')
			.attr('opacity', 1)
		// axis
		xGroup
			.call(xAxis)
			.selectAll('text')
			.attr('font-size', '15px')
		
		// hook to zoom
		if(canScrollX) {
			xGroup.call(xZoom)
			xGroup.attr('cursor', 'grab')
		}
		
		// y-axis group
		const yGroup = svg.append('g')
			.attr('class', 'Timeline-axis axis--y')
			.attr('transform', translate(TIMEBARWIDTH, THEATERBARHEIGHT))
		// overlay
		yGroup.append('rect')
			.attr('transform', translate(-TIMEBARWIDTH, -THEATERBARHEIGHT))
			.attr('width', TIMEBARWIDTH)
			.attr('height', height)
			.attr('fill', 'white')
			.attr('opacity', 1)
		
		//axis
		yGroup.call(yAxis)
		
		const yLinesGroup = svg.append('g')
			.attr('class', 'Timeline-axis axis--y')
			.attr('transform', translate(TIMEBARWIDTH, THEATERBARHEIGHT))
		
		yLinesGroup
			.call(yLines)
		

		// y-axis zoom hook directly on svg
		svg.call(yZoom)

		// Add line representing current time
		const nowLine = svg.append('line')
			.attr('transform', translate(0, THEATERBARHEIGHT))
			.attr('x1', TIMEBARWIDTH)
			.attr('y1', y(moment(NOW)))
			.attr('x2', x(theaters.length-1)+x.bandwidth())
			.attr('y2', y(moment(NOW)))
			.attr('stroke-width', 2)
			.attr('stroke', 'red')

		
		function yZoomed() {
			const transform = d3.event.transform
			const newY = transform.rescaleY(y)

			actualRects
				.attr('y', data => newY(moment(data.startTime)))
				.attr('height', data => (newY(moment(data.endTime || NOW)) - newY(moment(data.startTime))))
			
			plannedRects
				.attr('y', data => newY(moment(data.plannedStartTime)))
				.attr('height', data => (newY(moment(data.plannedEndTime)) - newY(moment(data.plannedStartTime))))
			
			nowLine
				.attr('y1', newY(moment(NOW)))
				.attr('y2', newY(moment(NOW)))
			
			yAxis.scale(newY)
			yLines.scale(newY)
			yGroup.call(yAxis)
			yLinesGroup.call(yLines)
		}

		function xZoomed() {
			const transform = d3.event.transform
			var newX = x.rangeRound([transform.x+TIMEBARWIDTH, (xDomain+transform.x-TIMEBARWIDTH - 10)])
			actualRects.attr('x', data => newX(data.theater))
			plannedRects.attr('x', data => x(data.theater) + x.bandwidth() - PLANNEDWIDTH - STROKEWIDTH/2)
			xAxis.scale(newX)
			xGroup.call(xAxis)
		}
	}

	render() {
		return (
			<div
				className="Timeline-container"
				ref = {element => this.container = element}
			/>
		)
	}
}

export default Timeline