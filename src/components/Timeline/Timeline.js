import React, { Component } from 'react'
import data , { transformData } from './data'
import * as d3 from 'd3'
import moment from 'moment'

import './Timeline.css'

const TODAY = '2017-09-20'
const OPERATIONWIDTH = 80
const OPERATIONPADDING = 10

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.container = null
	}

	componentDidMount() {
		const theaters = data.theaters
		const operations = transformData(data)

		const xDomain = theaters.length *(OPERATIONWIDTH + OPERATIONPADDING)

		const height = window.innerHeight - this.container.offsetTop - 50
		const svg = d3.select(this.container).append('svg')
			.attr('width', xDomain)
			.attr('height', height)
		
		const width = xDomain

		const zoom = d3.zoom()
			.scaleExtent([1, 40])
			.translateExtent([[0, 0], [width, height]])
			.on('zoom', zoomed)
		
		const x = d3.scaleBand()
			.domain(theaters.map(theater => theater.id))
			.rangeRound([0, width-1])
			.paddingInner(0.1)
			.paddingOuter(0.6)
		
		const y = d3.scaleTime()
			.domain([moment(TODAY).startOf('day'), moment(TODAY).endOf('day')])
			.range([0, height-1])
		
		const xAxis = d3.axisTop(x)
			.tickPadding(-20)
			.tickSize(-height)
			.tickFormat(val => theaters.find(theater => theater.id === val).name)
		
		const yAxis = d3.axisRight(y)
			.ticks(20)
			.tickSize(width)
			.tickPadding(8 - width)
		
		const rects = svg.append('g')
			.selectAll('rect')
			.data(operations)
			.enter()
			.append('rect')
			.attr('x', data => x(data.theater))
			.attr('y', data => y(moment(data.startTime)))
			.attr('width', x.bandwidth())
			.attr('height', data => (y(moment(data.endTime)) - y(moment(data.startTime))))
			.attr('fill', 'green')
		
		svg.append('g')
			.attr('class', 'Timeline-axis axis--x')
			.call(xAxis)
			.selectAll('text')
		
		const gY = svg.append('g')
			.attr('class', 'Timeline-axis axis--y')
			.call(yAxis)
		
		svg.call(zoom)
		
		function zoomed() {
			rects.attr('transform', d3.event.transform)
			gY.call(yAxis.scale(d3.event.transform.rescaleY(y)))
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