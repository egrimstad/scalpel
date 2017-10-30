import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'

import './Timeline.css'
import OperationDrawer from '../../containers/OperationDrawer'

const OPERATIONWIDTH = 64
const PLANNEDWIDTH = 16
const STROKEWIDTH = 1
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
		this.props.setHeaderItems(['calendar'])

		this.container = null
		this.filter = null

		this.click = this.click.bind(this)
		this.start = this.start.bind(this)
		this.cancel = this.cancel.bind(this)
		this.redirect = this.redirect.bind(this)
		this.closeDialog = this.closeDialog.bind(this)

		this.createFilter = this.createFilter.bind(this)
		this.buildTimeline = this.buildTimeline.bind(this)

		this.zoomTransformEvent = null

		this.state = {
			operationDrawerOpen: false,
			selectedOperation: null
		}
	}

	closeDialog() {
		this.setState({ phaseDialogOpen: false})
	}

	redirect(url) {
		this.props.history.push(url)
	}

	click(operation) {
		this.setState({
			selectedOperation: operation,
			operationDrawerOpen: true
		})

		d3.select(d3.event.currentTarget)
			.attr('filter', null)		
			.selectAll('.Timeline-operation-backdrop, .Timeline-planned')
			.classed('Timeline-operation-click', false)

		return false
	}

	start() {
		d3.select(d3.event.currentTarget)
			.attr('filter', 'url(#Timeline-click-filter)')
			.selectAll('.Timeline-operation-backdrop, .Timeline-planned')
			.classed('Timeline-operation-click', true)

		return false
	}

	cancel() {
		d3.select(d3.event.currentTarget)
			.attr('filter', null)		
			.selectAll('.Timeline-operation-backdrop, .Timeline-planned')
			.classed('Timeline-operation-click', false)
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

		this.filter.append('feColorMatrix')  // Adds a saturation filter
			.attr('type', 'saturate')
			.attr('values', '0.4')
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
		const now = moment()

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

		const theaterX = theater => xoffset + theater.index*THEATERPADDING + theater.startColumn*(OPERATIONWIDTH + OPERATIONPADDING)
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
			.attr('clip-path', 'url(#Timeline-ymask)')
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
		const phase = operationEnter.append('g')
			.selectAll('rect')
			.data(op => op.phases.filter(phase => !isNil(phase.start)))
			.enter()
		
		const timeRects =  operationEnter.append('g').append('rect')
			.attr('class', 'Timeline-operation-backdrop')
			.attr('x', op => operationActualX(op.column))
			.attr('y', op => y(moment(op.start)))
			.attr('width', operationActualWidth)
			.attr('height', op => y(moment(op.end || now)) - y(moment(op.start)))
			
		const phaseRects = phase.append('rect')
			.attr('x', phase => operationActualX(phase.column))
			.attr('y', phase => y(moment(phase.start)))
			.attr('width', operationActualWidth)
			.attr('height', phase => y(moment(phase.end || now)) - y(moment(phase.start)))			
			.attr('fill', phase => phase.color)
			.attr('stroke-width', 0)

		const plannedPhase = operationEnter.append('g')
			.attr('class', 'Timeline-planned')
			.attr('stroke-width', STROKEWIDTH)
			.attr('stroke', 'gray')
			.selectAll('rect')
			.data(op => op.plannedPhases)
			.enter()

		const plannedRects = plannedPhase.append('rect')
			.attr('x', plannedPhase => operationPlannedX(plannedPhase.column))
			.attr('y', plannedPhase => y(moment(plannedPhase.start)))
			.attr('width', PLANNEDWIDTH)
			.attr('height', plannedPhase => y(moment(plannedPhase.end)) - y(moment(plannedPhase.start)))			
			.attr('fill', plannedPhase => plannedPhase.color)
			

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
			zoomer(d3.event)
		}

		const zoomer = (event) => {
			this.zoomTransformEvent = event
			const transform = event.transform
			const newY = transform.rescaleY(y)
			
			timeRects
				.attr('y', op => newY(moment(op.start)))
				.attr('height', op => newY(moment(op.end || now)) - newY(moment(op.start)))

			phaseRects
				.attr('y', phase => newY(moment(phase.start)))
				.attr('height', phase => newY(moment(phase.end || now)) - newY(moment(phase.start)))
			
			plannedRects
				.attr('y', phase => newY(moment(phase.start)))
				.attr('height', phase => (newY(moment(phase.end)) - newY(moment(phase.start))))
			
			if(nowLine) {
				nowLine
					.attr('y1', newY(now))
					.attr('y2', newY(now))
			}
			
			yLabels.scale(newY)
			yLines.scale(newY)
			yGroup.call(yLabels)
			yLinesGroup.call(yLines)

			if(!canScrollX || event.sourceEvent.type === 'wheel') {
				return
			}

			xoffset =  mouseX(event.sourceEvent) - xscrollstart

			// Limit scroll
			xoffset = (xoffset <= xScrollDomain[0]) ? xoffset : xScrollDomain[0]
			xoffset = (xoffset >= xScrollDomain[1]) ? xoffset : xScrollDomain[1]
			
			timeRects.attr('x', op => operationActualX(op.column))
			phaseRects.attr('x', phase => operationActualX(phase.column))
			plannedRects.attr('x', op => operationPlannedX(op.column))
			theaterGroup.attr('transform', theater => translate(theaterX(theater), 0))
		}

		if(this.zoomTransformEvent) {
			zoomer(this.zoomTransformEvent)
		}
	}

	render() {
		return (
			<div
				ref = {element => this.container = element}
			>
				<OperationDrawer
					showDetails
					redirect={this.redirect}
					operation={this.state.selectedOperation}
					open={this.state.operationDrawerOpen}
					onRequestClose={() => this.setState({operationDrawerOpen: false})}
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
				start: PropTypes.string,
				end: PropTypes.string,
				color: PropTypes.string
			})),
			column: PropTypes.number
		})),
		startColumn: PropTypes.number,
		columns: PropTypes.number,
		index: PropTypes.number
	})),
	numColumns: PropTypes.number,
	setHeaderItems: PropTypes.func
}

export default Timeline
