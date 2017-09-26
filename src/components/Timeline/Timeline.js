import React, { Component } from 'react'
import data , { transformData } from './data'
import * as d3 from 'd3'
import moment from 'moment'

import './Timeline.css'

const OPERATIONWIDTH = 50
const OPERATIONPADDING = 50
const SIDEPADDING = 10
const HOURHEIGHT = 50
const today = '2017-09-20'
const PADDING = 10

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.theateraxisDiv = null
		this.timeaxisDiv = null

		this.timeaxisSvg = null
		this.theateraxisSvg = null
		this.operationsSvg = null

		this.buildTimeline = this.buildTimeline.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
		this.theaterX = this.theaterX.bind(this)
		this.timeY = this.timeY.bind(this)

		this.state = {
			timelineWidth: 0,
			scrollX: 0,
			scrollY: 0
		}
	}

	handleScroll() {
		this.timeaxisSvg.style.top = this.timeY() + 'px'
		this.theateraxisSvg.style.left = this.theaterX() + 'px'
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
		this.buildTimeline()
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	buildTimeline() {
		const svgHeight = this.operationsSvg.getBoundingClientRect().height

		// Create timeline element
		const timeaxis = d3.select(this.timeaxisSvg).append('g')
		const theateraxis = d3.select(this.theateraxisSvg).append('g')
		const operations = d3.select(this.operationsSvg).append('g')

		// Create time scale and y-axis
		const timeScale = d3.scaleTime()
			.domain([moment(today).startOf('day'), moment(today).endOf('day')])
			.range([PADDING, svgHeight-PADDING])
		
		const yAxis = d3.axisRight().tickFormat(d3.timeFormat('%H-%M')).scale(timeScale).ticks(48)
		timeaxis.append('g').call(yAxis)

		// Add theater names
		theateraxis
			.selectAll('text.theater')
			.data(data.theaters)
			.enter()
			.append('text')
			.text(data => data.name)
			.attr('x', (data, i) => i * (OPERATIONWIDTH + OPERATIONPADDING) + SIDEPADDING + OPERATIONWIDTH/2)
			.attr('y', PADDING*2)
			.style('alignment-baseline', 'hanging')
			.style('text-anchor', 'middle')

		// Add operations
		operations
			.selectAll('rect')
			.data(transformData(data))
			.enter()
			.append('rect')
			.attr('x', data => data.theater * (OPERATIONWIDTH + OPERATIONPADDING) + SIDEPADDING)
			.attr('y', data => timeScale(moment(data.startTime)))
			.attr('width', OPERATIONWIDTH)
			.attr('height', data => (timeScale(moment(data.endTime)) - timeScale(moment(data.startTime))))
			.attr('fill', 'green')
			.attr('stroke', 'grey')
			.attr('stroke-width', '3')
		
		// Find generated width and update state
		const width = operations.node().getBBox().width + SIDEPADDING*2
		this.setState(() => { return {timelineWidth: width }})
	}

	theaterX() {
		if(!this.theateraxisDiv) return -window.scrollX
		return -window.scrollX + this.theateraxisDiv.offsetLeft
	}

	timeY() {
		if(!this.timeaxisDiv) return -window.scrollY
		return -window.scrollY + this.timeaxisDiv.offsetTop
	}

	render() {
		return (
			<div 
				className="Timeline-container"
				style={{
					height: HOURHEIGHT*24
				}}
			>
				<div
					className="Timeline-timeaxis"
					ref={element => {this.timeaxisDiv = element}}
				>
					<svg
						style={{height: HOURHEIGHT*24, position: 'fixed', top: 0}}
						ref={element => {this.timeaxisSvg = element}}
					/>
				</div>
				<div
					className="Timeline-theateraxis"
					ref={element => {this.theateraxisDiv = element}}
				>
					<svg
						style={{position: 'fixed', left: 0, width: this.state.timelineWidth}}
						ref={element => {this.theateraxisSvg = element}}
					/>
				</div>
				<div
					className="Timeline-operations" 
					style={{width: this.state.timelineWidth}}
				>
					<svg 
						style={{height:HOURHEIGHT*24, width: this.state.timelineWidth}} 
						ref={element => {this.operationsSvg = element}}
					/>
				</div>
				
			</div>
		)
	}
}

export default Timeline