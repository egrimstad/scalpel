import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'

import './Timeline.css'
import PhaseDialog from '../PhaseDialog/PhaseDialog'

const OPERATIONWIDTH = 64
const PLANNEDWIDTH = 16
const STROKEWIDTH = 2
const THEATERPADDING = 16
const OPERATIONPADDING = 0
const THEATERBARHEIGHT = 30
const TIMEBARWIDTH = 40

const translate = (x, y) => {
	return 'translate('+x+','+y+')'
}

const mouseX = (event) => {
	if(event instanceof MouseEvent) { 
		return event.x
	}else if(event instanceof TouchEvent) {
		return event.touches[0].screenX
	}
}

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.container = null

		this.pressTimer = null
		this.longpress = false
		this.pressTarget = null
		this.operationID = null
		this.filter = null

		this.click = this.click.bind(this)
		this.start = this.start.bind(this)
		this.cancel = this.cancel.bind(this)
		this.closeDialog = this.closeDialog.bind(this)

		this.createFilter = this.createFilter.bind(this)
		this.buildTimeline = this.buildTimeline.bind(this)

		this.state = {
			open: false,
			time: '10:00',
		}
	}

	closeDialog(value) {
		this.setState({ time: value, open: false })
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
		this.operationID = operation.id
		this.longpress = false
		d3.select(this.pressTarget).attr('filter', 'url(#Timeline-click-filter)')
		this.filter.transition().duration(1000).select('feMorphology').attr('radius', '5')
		this.pressTimer = setTimeout(() => {
			this.longpress = true
			this.setState({ open: true })
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

	createFilter() {
		this.filter = this.svg.select('defs')
			.append('filter')
			.attr('id', 'Timeline-click-filter')
	
		this.filter.append('feMorphology')  // Adds a dilation filter
			.attr('operator', 'dilate')
			.attr('radius', '2')
	
		this.filter.append('feColorMatrix')  // Adds a saturation filter
			.attr('type', 'saturate')
			.attr('values', '0.5')
	}

	createMask(id, x,y, width, height) {
		this.svg.select('defs').append('clipPath')
			.attr('id', id)
			.append('rect')
			.attr('x', x)
			.attr('y', y)
			.attr('width', width)
			.attr('height', height)
	}

	buildTimeline() {
		// Declare data
		const theaters = this.props.theaters
		const numColumns = this.props.numColumns
		const date = this.props.date
		const now = moment('2017-09-20 15:59')

		// Create svg if not done yet
		const height = window.innerHeight - this.container.offsetTop - THEATERBARHEIGHT		
		if(this.svg) {
			this.svg.selectAll('*').remove()
		}else {
			this.svg = d3.select(this.container).append('svg')
				.attr('width', '100%')
				.attr('height', height)
				.style('user-select', 'none')
		}

		if(isEmpty(theaters)) {
			this.svg.append('text')
				.attr('transform', translate(TIMEBARWIDTH, THEATERBARHEIGHT))
				.text('Ingen operasjoner i dag!')
			return
		}

		// Declare useful constants and functions
		const width = this.svg.node().getBoundingClientRect().width
		const timelineX = TIMEBARWIDTH
		const timelineY = THEATERBARHEIGHT
		const timelineWidth = (OPERATIONWIDTH + OPERATIONPADDING)*numColumns + THEATERPADDING*(theaters.length-1)
		const timelineHeight = height - THEATERBARHEIGHT
		
		const xScrollDomain = [0, -(timelineWidth-(width-timelineX))]
		let xscrollstart = 0
		let xoffset = 0

		const theaterX = theater => xoffset + theater.id*THEATERPADDING + theater.startColumn*(OPERATIONWIDTH + OPERATIONPADDING)
		const theaterWidth = theater => (OPERATIONWIDTH + OPERATIONPADDING)*theater.columns

		const operationActualX = column => column*(OPERATIONWIDTH + OPERATIONPADDING)
		const operationPlannedX = column => operationActualX(column) + OPERATIONWIDTH - PLANNEDWIDTH - STROKEWIDTH/2
		const operationActualWidth = OPERATIONWIDTH - PLANNEDWIDTH - STROKEWIDTH
		
		const canScrollX = width <= timelineWidth
		
		this.svg.append('defs')
		this.createFilter()
		this.createMask('Timeline-ymask', 0, 0, timelineWidth, timelineHeight)
		
		// zoom
		const zoom = d3.zoom()
			.extent([[0, 0], [width-timelineX, timelineHeight]])
			.scaleExtent([1, 20])
			.translateExtent([[0, 0], [timelineWidth, timelineHeight]])
			.on('start', () => startZoom())
			.on('zoom', () => zoomed())
		
		this.svg.call(zoom)
			.on('dblclick.zoom', null)
	
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
			.text(theater => theater.name.toUpperCase())
			.attr('class', 'Timeline-theater-name')
			.attr('x', theater => theaterWidth(theater)/2)
			.attr('y', -5)

		// Operations
		const operation = theaterGroup.append('g')
			.attr('clip-path', 'url(#Timeline-ymask')
			.selectAll('g')
			.data(theater => theater.operations)
		
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
			.attr('x', phase => operationActualX(phase.column))
			.attr('y', phase => y(moment(phase.start)))
			.attr('width', operationActualWidth)
			.attr('height', phase => y(moment(phase.end || now)) - y(moment(phase.start)))			
			.attr('fill', phase => phase.color)
	
		// Planned time
		const plannedRects = operationEnter.append('rect')
			.attr('x', op => operationPlannedX(op.column))
			.attr('y', op => y(moment(op.plannedStartTime)))
			.attr('width', PLANNEDWIDTH)
			.attr('height', op => (y(moment(op.plannedEndTime)) - y(moment(op.plannedStartTime))))
			.attr('fill', 'white')
			.attr('stroke-width', STROKEWIDTH)
			.attr('stroke', 'lightgrey')
		
		// y-axis group
		const yGroup = this.svg.append('g')
			.attr('class', 'Timeline-axis')
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
			.attr('class', 'Timeline-axis')
			.attr('transform', translate(timelineX, timelineY))
		
		yLinesGroup
			.call(yLines)

		// Add line representing current time
		let nowLine = null
		if(now.isSame(date, 'day')) {
			nowLine = this.svg.append('line')
				.attr('transform', translate(timelineX, timelineY))
				.attr('x1', 0)
				.attr('y1', y(now))
				.attr('x2', timelineWidth)
				.attr('y2', y(now))
				.attr('class', 'Timeline-now-line')
				.attr('clip-path', 'url(#Timeline-ymask)')
		}

		const startZoom = () => {
			xscrollstart = mouseX(d3.event.sourceEvent) - xoffset
		}

		const zoomed = () => {
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

			if(!canScrollX || d3.event.sourceEvent.type === 'wheel') {
				return
			}

			xoffset =  mouseX(d3.event.sourceEvent) - xscrollstart

			// Limit scroll
			xoffset = (xoffset <= xScrollDomain[0]) ? xoffset : xScrollDomain[0]
			xoffset = (xoffset >= xScrollDomain[1]) ? xoffset : xScrollDomain[1]
			
			phaseRects.attr('x', phase => operationActualX(phase.column))
			plannedRects.attr('x', op => operationPlannedX(op.column))
			theaterGroup.attr('transform', theater => translate(theaterX(theater), 0))
		}
	}

	render() {
		return (
			<div
				ref = {element => this.container = element}
			>
				<PhaseDialog
					time={this.state.time}
					title={'Operation ' + this.operationID}
					open={this.state.open}
					onRequestClose={this.closeDialog}
				/>
			</div>
		)
	}
}

Timeline.propTypes = {
	date: PropTypes.object,
	theaters: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		operations: PropTypes.arrayOf(PropTypes.shape({
			phases: PropTypes.arrayOf(PropTypes.shape({
				column: PropTypes.number,
				start: PropTypes.object,
				end: PropTypes.object,
				color: PropTypes.string
			})),
			column: PropTypes.number
		})),
		startColumn: PropTypes.number,
		columns: PropTypes.number,
	})),
	numColumns: PropTypes.number,
	setHeaderItems: PropTypes.func
}

export default Timeline