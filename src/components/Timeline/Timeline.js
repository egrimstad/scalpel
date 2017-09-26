import React, { Component } from 'react'
import data , { transformData } from './data'
import * as d3 from 'd3'
import moment from 'moment'

import './Timeline.css'

const TODAY = '2017-09-20'
const OPERATIONWIDTH = 80
const OPERATIONPADDING = 10
const HEIGHT = 1000

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
			.attr('width', '100%')
			.attr('height', height)
		
		const width = xDomain

		var zoom = d3.zoom()
			.scaleExtent([1, 40])
			.translateExtent([[0, 0], [width, height]])
			.on('zoom', zoomed)
		
		var x = d3.scaleLinear()
			.domain([0, theaters.length])
			.range([0, width])
		
		var y = d3.scaleTime()
			.domain([moment(TODAY).startOf('day'), moment(TODAY).endOf('day')])
			.range([-1, height + 1])
		
		var xAxis = d3.axisTop(x)
			.ticks(theaters.length)
			.tickSize(-height)
			.tickPadding(-20)
			.tickFormat(val => {
				return val < theaters.length ? theaters[val].name : ''
			})
		
		var yAxis = d3.axisRight(y)
			.ticks(10)
			.tickSize(width)
			.tickPadding(8 - width)
		
		
		var gX = svg.append('g')
			.attr('class', 'Timeline-axis axis--x')
			.call(xAxis)
			.selectAll('text')
			.attr('dx', OPERATIONWIDTH/2)
		
		var gY = svg.append('g')
			.attr('class', 'Timeline-axis axis--y')
			.call(yAxis)
		
		//gX.call(xAxis.scale(width/xDomain))
		svg.call(zoom)
		
		function zoomed() {
			gY.call(yAxis.scale(d3.event.transform.rescaleY(y)))
		}
		
		function resetted() {
			svg.transition()
				.duration(750)
				.call(zoom.transform, d3.zoomIdentity)
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