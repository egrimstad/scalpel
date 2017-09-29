import React, { Component } from 'react'
import data , { transformData } from './../../data'
import * as d3 from 'd3'
import moment from 'moment'

import './Timeline.css'

const OPERATIONWIDTH = 50
const OPERATIONPADDING = 50
const SIDEPADDING = 50
const AXISPADDING = 50
const HOURHEIGHT = 50
const today = '2017-09-20'
const PADDING = 10

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.svgElement = null

		this.buildTimeline = this.buildTimeline.bind(this)

		this.state = {
			timelineWidth: 0
		}
	}

	componentDidMount() {
		this.buildTimeline()
	}

	buildTimeline() {
		const svgHeight = this.svgElement.getBoundingClientRect().height

		// Create timeline element
		const timeline = d3.select(this.svgElement).append('g')


		// Create time scale and y-axis
		const timeScale = d3.scaleTime()
			.domain([moment(today).startOf('day'), moment(today).endOf('day')])
			.range([PADDING, svgHeight-PADDING])
		
		const yAxis = d3.axisRight().tickFormat(d3.timeFormat('%H-%M')).scale(timeScale)
		timeline.append('g').call(yAxis)

		// Add theater names
		timeline
			.selectAll('text.theater')
			.data(data.theaters)
			.enter()
			.append('text')
			.text(data => data.name)
			.attr('x', (data, i) => i * (OPERATIONWIDTH + OPERATIONPADDING) + SIDEPADDING + AXISPADDING)
			.attr('y', PADDING)
			.style('alignment-baseline', 'hanging')

		// Add operations
		timeline
			.selectAll('rect')
			.data(transformData(data))
			.enter()
			.append('rect')
			.attr('x', data => data.theater * (OPERATIONWIDTH + OPERATIONPADDING) + SIDEPADDING + AXISPADDING)
			.attr('y', data => timeScale(moment(data.startTime)))
			.attr('width', OPERATIONWIDTH)
			.attr('height', data => (timeScale(moment(data.endTime)) - timeScale(moment(data.startTime))))
			.attr('fill', 'green')
			.attr('stroke', 'grey')
			.attr('stroke-width', '3')
		
		// Find generated with and update state
		const width = timeline.node().getBBox().width + SIDEPADDING
		this.setState({timelineWidth: width })
	}

	render() {
		return (
			<div className="shadow" style={{width: '100%', overflowX: 'scroll'}}>
				<svg style={{width: this.state.timelineWidth, height:HOURHEIGHT*24}} ref={element => {this.svgElement = element}}/>
			</div>
		)
	}
}

export default Timeline