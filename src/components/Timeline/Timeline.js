import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data , { transformData } from '../../data'
import * as d3 from 'd3'
import moment from 'moment'

import './Timeline.css'

const NOW = moment('2017-09-20 15:59')
const OPERATIONWIDTH = 64
const PLANNEDWIDTH = 8
const STROKEWIDTH = 2
const OPERATIONPADDING = 0.25
const THEATERBARHEIGHT = 30
const TIMEBARWIDTH = 40

const translate = (x, y) => {
	return 'translate('+x+','+y+')'
}

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.container = null

		this.pressTimer = null
		this.longpress = false
		this.pressTarget = null
		this.filter = null

		this.click = this.click.bind(this)
		this.start = this.start.bind(this)
		this.cancel = this.cancel.bind(this)
	}

	click(operation) {
		if(this.pressTimer) {
			clearTimeout(this.pressTimer)
			this.pressTimer = null
		}
		if(!this.longpress) {
			this.filter.transition().select('feMorphology').attr('radius','2')
			d3.select(this.pressTarget).attr('filter', null)
			this.pressTimer = null
		}

		return false
		
	}

	start(operation) {
		if(this.pressTimer) return
		
		this.pressTarget = d3.event.currentTarget
		this.longpress = false
		d3.select(this.pressTarget).attr('filter', 'url(#Timeline-click-filter)')
		this.filter.transition().duration(1000).select('feMorphology').attr('radius', '5')
		this.pressTimer = setTimeout(() => {
			this.longpress = true
			// console.log(filter.select('feMorphology').attr('radius'))  // can read out the current radius value
			this.filter.transition().select('feMorphology').attr('radius','2')
			d3.select(this.pressTarget).attr('filter', null)
			this.pressTimer = null
		}, 1000)

		return false
	}

	cancel() {
		if(this.pressTimer) {
			clearTimeout(this.pressTimer)
			this.pressTimer = null
			this.filter.transition().select('feMorphology').attr('radius','2')
			d3.select(this.pressTarget).attr('filter', null)
		}
		return false
	}

	componentDidMount() {
		const theaters = data.theaters
		const operations = transformData(data)

		let xDomain = theaters.length*(OPERATIONWIDTH + OPERATIONWIDTH*OPERATIONPADDING)

		const height = window.innerHeight - this.container.offsetTop - THEATERBARHEIGHT
		const svg = d3.select(this.container).append('svg')
			.attr('width', '100%')
			.attr('height', height)

		this.filter = svg.append('defs')
			.append('filter')
			.attr('id', 'Timeline-click-filter')
		
		this.filter.append('feMorphology')  // Adds a dilation filter
			.attr('operator', 'dilate')
			.attr('radius', '2')
		
		this.filter.append('feColorMatrix')  // Adds a saturation filter
			.attr('type', 'saturate')
			.attr('values', '0.5')
		
		let canScrollX = true
		
		const width = svg.node().getBoundingClientRect().width

		if(width > xDomain) {
			canScrollX = false
		}

		// x-axis zoom
		const xZoom = d3.zoom()
			.extent([[0, 0], [(width), height]])
			.scaleExtent([1, 1])
			.translateExtent([[0, 0], [xDomain, 0]])
			.on('zoom', xZoomed)

		// x-axis scale
		const x = d3.scaleBand()
			.domain(theaters.map(theater => theater.id))
			.rangeRound([TIMEBARWIDTH, xDomain])
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
		const operation = svg.append('g')
			.attr('transform', translate(0, THEATERBARHEIGHT))
			.selectAll('g')
			.data(operations)
		
		const operationEnter = operation.enter().append('g')
			.on('click', this.click)
			.on('mousedown', this.start)
			.on('touchstart', this.start)
			.on('mouseout', this.cancel)
			.on('touchend', this.cancel)
			.on('touchleave', this.cancel)
			.on('touchmove', this.cancel)
			.on('touchcancel', this.cancel)
			.on('dragstart', this.cancel)
			.on('contextmenu', () => d3.event.preventDefault())
		
		// Actual time spend
		const phase = operationEnter
			.selectAll('rect')
			.data(op => op.phases)
			.enter()
		
		const phaseRects = phase.append('rect')
			.attr('x', phase => x(phase.column))
			.attr('y', phase => y(phase.start))
			.attr('width', x.bandwidth() - PLANNEDWIDTH - STROKEWIDTH)
			.attr('height', phase => y(phase.end ||NOW) - y(phase.start))			
			.attr('fill', phase => phase.color)
	
		// Planned time
		const plannedRects = operationEnter.append('rect')
			.attr('x', op => x(op.theater) + x.bandwidth() - PLANNEDWIDTH - STROKEWIDTH/2)
			.attr('y', op => y(moment(op.plannedStartTime)))
			.attr('width', PLANNEDWIDTH)
			.attr('height', op => (y(moment(op.plannedEndTime)) - y(moment(op.plannedStartTime))))
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
			.attr('font-size', '10px')
		
		// hook to zoom
		if(canScrollX) {
			xGroup.call(xZoom).on('dblclick.zoom', null)
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
		svg.call(yZoom).on('dblclick.zoom', null).style('user-select', 'none')

		// Add line representing current time
		const nowLine = svg.append('line')
			.attr('transform', translate(0, THEATERBARHEIGHT))
			.attr('x1', TIMEBARWIDTH)
			.attr('y1', y(moment(NOW)))
			.attr('x2', x(theaters.length-1)+x.bandwidth())
			.attr('y2', y(moment(NOW)))
			.attr('stroke-width', 1)
			.attr('stroke', '#EC4B3A')

		
		function yZoomed() {
			const transform = d3.event.transform
			const newY = transform.rescaleY(y)

			phaseRects
				.attr('y', phase => newY(phase.start))
				.attr('height', phase => newY(phase.end || NOW) - newY(phase.start))
			
			plannedRects
				.attr('y', op => newY(moment(op.plannedStartTime)))
				.attr('height', op => (newY(moment(op.plannedEndTime)) - newY(moment(op.plannedStartTime))))
			
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
			var newX = x.rangeRound([transform.x+TIMEBARWIDTH, transform.x + xDomain])
			phaseRects.attr('x', phase => newX(phase.column))
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

Timeline.propTypes = {
	setHeaderItems: PropTypes.func
}

export default Timeline