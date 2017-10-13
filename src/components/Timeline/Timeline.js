import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import moment from 'moment'
import range from 'lodash/range'

import './Timeline.css'

const OPERATIONWIDTH = 64
const PLANNEDWIDTH = 8
const STROKEWIDTH = 2
const THEATERPADDING = 16
const OPERATIONPADDING = 0
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

		this.buildTimeline = this.buildTimeline.bind(this)
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

	componentDidUpdate() {
		this.buildTimeline()
	}

	componentDidMount() {
		this.buildTimeline()
	}

	calculateX(theater, subColumn, xScale) {
		return xScale(theater.id*THEATERPADDING + (theater.startColumn + subColumn)*(OPERATIONWIDTH + OPERATIONPADDING))
	}

	buildTimeline() {
		const height = window.innerHeight - this.container.offsetTop - THEATERBARHEIGHT		

		if(this.svg) {
			this.svg.selectAll('*').remove()
		}else {
			this.svg = d3.select(this.container).append('svg')
				.attr('width', '100%')
				.attr('height', height)
		}

		const theaters = this.props.theaters
		const operations = this.props.operations
		const numColumns = this.props.numColumns
		const date = this.props.date
		const now = moment('2017-09-20 15:59')

		const timelineX = TIMEBARWIDTH
		const timelineY = THEATERBARHEIGHT
		const timelineWidth = (OPERATIONWIDTH + OPERATIONPADDING)*numColumns + THEATERPADDING*(theaters.length-1)
		const timelineHeight = height - THEATERBARHEIGHT
		
		let xtransform = 0

		const theaterX = theater => xtransform + theater.id*THEATERPADDING + theater.startColumn*(OPERATIONWIDTH + OPERATIONPADDING)
		const theaterWidth = theater => (OPERATIONWIDTH + OPERATIONPADDING)*theater.columns

		const operationActualX = (theater, subColumn) => theaterX(theater) + subColumn*(OPERATIONWIDTH + OPERATIONPADDING)
		const operationPlannedX = (theater, subColumn) => operationActualX(theater, subColumn) + OPERATIONWIDTH - PLANNEDWIDTH - STROKEWIDTH/2
		const operationActualWidth = OPERATIONWIDTH - PLANNEDWIDTH - STROKEWIDTH

		this.filter = this.svg.append('defs')
			.append('filter')
			.attr('id', 'Timeline-click-filter')
		
		this.filter.append('feMorphology')  // Adds a dilation filter
			.attr('operator', 'dilate')
			.attr('radius', '2')
		
		this.filter.append('feColorMatrix')  // Adds a saturation filter
			.attr('type', 'saturate')
			.attr('values', '0.5')
		
		let canScrollX = true
		
		const width = this.svg.node().getBoundingClientRect().width

		if(width > timelineWidth) {
			canScrollX = false
		}

		// x-axis zoom
		const xZoom = d3.zoom()
			.extent([[0, 0], [width, 0]])
			.scaleExtent([1, 1])
			.translateExtent([[0, 0], [timelineWidth + timelineX, 0]])
			.on('zoom', () => xZoomed())
		
		// y-axis zoom
		const yZoom = d3.zoom()
			.extent([[0, 0], [(width), timelineHeight]])
			.scaleExtent([1, 15])
			.translateExtent([[0, 0], [0, timelineHeight]])
			.on('zoom', () => yZoomed())
	
		// y-axis scale
		const y = d3.scaleTime()
			.domain([moment(date).startOf('day'), moment(date).endOf('day')])
			.range([0, timelineHeight-1])
	
		// y-axis labels
		const yLabels = d3.axisLeft(y)
			.ticks(20)
			.tickFormat(d3.timeFormat('%H:%M'))
		
		// y-axis lines
		const yLines = d3.axisLeft(y)
			.ticks(20)
			.tickFormat('')
			.tickSize(-timelineWidth)
		
		// x-axis group
		const xGroup = this.svg.append('g')
		// overlay
		xGroup.append('rect')
			.attr('width', width)
			.attr('height', THEATERBARHEIGHT)
			.attr('fill', 'white')
			.attr('opacity', 1)
		
		// hook to zoom
		if(canScrollX) {
			xGroup.call(xZoom).on('dblclick.zoom', null)
			xGroup.attr('cursor', 'grab')
		}
		
		const theaterGroup = this.svg.append('g')
			.attr('transform', translate(timelineX, timelineY))
			.selectAll('g')
			.data(theaters)
			.enter()
			.append('g')
			.attr('transform', theater => translate(theaterX(theater), 0))
		
		// Grey background behind theater
		theaterGroup.append('rect')
			.attr('y', 0)
			.attr('width', theater => theaterWidth(theater))
			.attr('height', timelineHeight)
			.attr('fill', '#efefef')
		
		// Theater name
		theaterGroup.append('text')
			.text(theater => theater.name)
			.attr('text-anchor', 'middle')
			.attr('x', theater => theaterWidth(theater)/2)
			.attr('y', -5)
			.attr('font-size', '10px')

		// Operations
		const operation = this.svg.append('g')
			.attr('transform', translate(timelineX, timelineY))
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
		
		// Actual time spent
		const phase = operationEnter
			.selectAll('rect')
			.data(op => op.phases)
			.enter()
		
		const phaseRects = phase.append('rect')
			.attr('x', phase => operationActualX(phase.theater, phase.subColumn))
			.attr('y', phase => y(moment(phase.start)))
			.attr('width', operationActualWidth)
			.attr('height', phase => y(moment(phase.end || now)) - y(moment(phase.start)))			
			.attr('fill', phase => phase.color)
	
		// Planned time
		const plannedRects = operationEnter.append('rect')
			.attr('x', op => operationPlannedX(op.theater, op.subColumn))
			.attr('y', op => y(moment(op.plannedStartTime)))
			.attr('width', PLANNEDWIDTH)
			.attr('height', op => (y(moment(op.plannedEndTime)) - y(moment(op.plannedStartTime))))
			.attr('fill', 'white')
			.attr('stroke-width', STROKEWIDTH)
			.attr('stroke', 'lightgrey')
		
		// y-axis group
		const yGroup = this.svg.append('g')
			.attr('class', 'Timeline-axis axis--y')
			.attr('transform', translate(timelineX, timelineY))
		// overlay
		yGroup.append('rect')
			.attr('transform', translate(-timelineX, -timelineY))
			.attr('width', TIMEBARWIDTH)
			.attr('height', height)
			.attr('fill', 'white')
		
		//axis
		yGroup.call(yLabels)
		
		const yLinesGroup = this.svg.append('g')
			.attr('class', 'Timeline-axis axis--y')
			.attr('transform', translate(timelineX, timelineY))
		
		yLinesGroup
			.call(yLines)
		

		// y-axis zoom hook directly on svg
		this.svg.call(yZoom).on('dblclick.zoom', null).style('user-select', 'none')

		// Add line representing current time
		let nowLine = null
		if(now.isSame(date, 'day')) {
			nowLine = this.svg.append('line')
				.attr('transform', translate(timelineX, timelineY))
				.attr('x1', 0)
				.attr('y1', y(now))
				.attr('x2', timelineWidth)
				.attr('y2', y(now))
				.attr('stroke-width', 1)
				.attr('stroke', '#EC4B3A')
		}

		const yZoomed = () => {
			const transform = d3.event.transform
			const newY = transform.rescaleY(y)

			phaseRects
				.attr('y', phase => newY(moment(phase.start)))
				.attr('height', phase => newY(moment(phase.end || now)) - newY(moment(phase.start)))
			
			plannedRects
				.attr('y', op => newY(moment(op.plannedStartTime)))
				.attr('height', op => (newY(moment(op.plannedEndTime)) - newY(moment(op.plannedStartTime))))
			
			if(nowLine) {
				nowLine
					.attr('y1', newY(now))
					.attr('y2', newY(now))
			}
			
			yLabels.scale(newY)
			yLines.scale(newY)
			yGroup.call(yLabels)
			yLinesGroup.call(yLines)
		}

		const xZoomed = () => {
			xtransform = d3.event.transform.x
			phaseRects.attr('x', phase => operationActualX(phase.theater, phase.subColumn))
			plannedRects.attr('x', op => operationPlannedX(op.theater, op.subColumn))
			theaterGroup.attr('transform', theater => translate(theaterX(theater), 0))
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
	date: PropTypes.object,
	operations: PropTypes.array,
	theaters: PropTypes.array,
	setHeaderItems: PropTypes.func
}

export default Timeline