import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MainHeader from '../../containers/MainHeader'
import OperationDrawer from '../OperationDrawer/OperationDrawer'
import { translate } from 'utils/d3Utils'
import { startTime, endTime, hasActivePhase } from 'utils/operationUtils'

import * as d3 from 'd3'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import moment from 'moment'

import './UserPlan.css'

const TIMEBARWIDTH = 40
const OPERATIONWIDTH = 64
const PLANNEDWIDTH = 32
const STROKEWIDTH = 1
const LINELENGTH = 32
const PADDING = 8

class UserPlan extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedOperation: null,
			operationDrawerOpen: false
		}

		this.container = null
		this.zoomTransformEvent = null

		this.buildPlan = this.buildPlan.bind(this)
		this.redirect = this.redirect.bind(this)
		this.openDrawer = this.openDrawer.bind(this)
		this.closeDrawer = this.closeDrawer.bind(this)
	}

	componentDidMount() {
		this.buildPlan()
	}

	componentDidUpdate() {
		this.buildPlan()
	}

	openDrawer(operation) {
		this.setState({ 
			selectedOperation: operation,
			operationDrawerOpen: true
		})
	}

	closeDrawer() {
		this.setState({
			operationDrawerOpen: false
		})
	}

	redirect(url) {
		this.props.history.push(url)
	}

	buildPlan() {
		const operations = this.props.operations
		const date = this.props.date
		const now = moment()
		// Create svg if not done yet
		const height = window.innerHeight - this.container.offsetTop		
		if(this.svg) {
			this.svg.selectAll('*').remove()
		}else {
			this.svg = d3.select(this.container).append('svg')
				.attr('width', '100%')
				.attr('height', height)
				.style('user-select', 'none')
		}

		if(isEmpty(operations)) {
			this.svg.append('text')
				.attr('alignment-baseline', 'hanging')
				.text('Ingen operasjoner i dag!')
			return
		}

		const width = this.svg.node().getBoundingClientRect().width
		const planX = TIMEBARWIDTH
		const planWidth = width - planX
		const operationActualWidth = OPERATIONWIDTH - PLANNEDWIDTH - STROKEWIDTH
		const infoBoxWidth = width - planX - OPERATIONWIDTH - LINELENGTH - 4*PADDING

		// zoom
		const zoom = d3.zoom()
			.extent([[0, 0], [0, height]])
			.scaleExtent([1, 5])
			.translateExtent([[0, 0], [0, height]])
			.on('zoom', () => zoomed())
		
		// y-axis scale
		const y = d3.scaleTime()
			.domain([moment(date).startOf('day'), moment(date).endOf('day')])
			.range([0, height-1])

		// y-axis labels
		const yLabels = d3.axisLeft(y)
			.ticks(20)
			.tickFormat(d3.timeFormat('%H:%M'))

		// y-axis lines
		const yLines = d3.axisLeft(y)
			.ticks(20)
			.tickFormat('')
			.tickSize(-OPERATIONWIDTH)
		
		const operation = this.svg.append('g')
			.selectAll('g')
			.data(operations)
		
		const operationEnter = operation.enter().append('g')
			.on('click', op => this.openDrawer(op))
			.on('contextmenu', () => d3.event.preventDefault())
		
		// Actual time spent
		const phase = operationEnter.append('g')
			.selectAll('rect')
			.data(op => op.phases.filter(phase => !isNil(phase.start)))
			.enter()
	
		const timeRects = operationEnter.append('g').append('rect')
			.attr('class', 'Timeline-operation-backdrop')
			.attr('x', planX)
			.attr('y', op => y(startTime(op)))
			.attr('width', operationActualWidth)
			.attr('height', op => y(hasActivePhase(op) ? now : endTime(op)) - y(startTime(op)))
		
		const phaseRects = phase.append('rect')
			.attr('x', planX)
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
			.attr('x', planX + operationActualWidth)
			.attr('y', plannedPhase => y(moment(plannedPhase.start)))
			.attr('width', PLANNEDWIDTH)
			.attr('height', plannedPhase => y(moment(plannedPhase.end)) - y(moment(plannedPhase.start)))			
			.attr('fill', plannedPhase => plannedPhase.color)
		
		const info = operationEnter.append('g')
			.attr('transform', op => translate(planX + OPERATIONWIDTH + PADDING, y(startTime(op))))
		
		info.append('line')
			.attr('x1', 0)
			.attr('x2', LINELENGTH)
			.attr('style', 'stroke:lightgrey;stroke-width:2')
		
		const infoBox = info.append('g')
			.attr('transform', translate(LINELENGTH + PADDING, 0))
			.attr('class', 'UserPlan-infobox')
		
		// box
		infoBox.append('rect')
			.attr('class', 'UserPlan-extrainfo')
			.attr('width', infoBoxWidth)
			.attr('height', '3em')
			.attr('fill', 'white')
			.attr('stroke', 'lightgrey')
			.attr('stroke-width', 1)
			.attr('shapeRendering', 'crispEdges')
			.attr('y', '-0.5em')
		
		// patient name
		infoBox.append('text')
			.text(op => `${op.patientName} (${op.patientAge})`)
			.attr('x', PADDING)
			.attr('y', '0.5em')
		
		// theater
		infoBox.append('text')
			.attr('class', 'UserPlan-extrainfo')
			.text(op => `Rom: ${op.theater.name}`)
			.attr('x', PADDING)
			.attr('y', '1.5em')
			.attr('font-size', '0.8em')
		
		// role
		infoBox.append('text')
			.attr('class', 'UserPlan-extrainfo')
			.text(op => `Rolle: ${op.role}`)
			.attr('x', PADDING)
			.attr('y', '2.5em')
			.attr('font-size', '0.8em')
		
		// y-axis group
		const yGroup = this.svg.append('g')
			.attr('class', 'Timeline-axis')
			.attr('transform', translate(planX, 0))
	
		//axis
		yGroup.call(yLabels)
	
		const yLinesGroup = this.svg.append('g')
			.attr('class', 'Timeline-axis')
			.attr('transform', translate(planX, 0))
	
		yLinesGroup
			.call(yLines)

		// Add line representing current time
		let nowLine = null
		if(now.isSame(date, 'day')) {
			nowLine = this.svg.append('line')
				.attr('transform', translate(planX, 0))
				.attr('x1', 0)
				.attr('y1', y(now))
				.attr('x2', OPERATIONWIDTH)
				.attr('y2', y(now))
				.attr('class', 'Timeline-now-line')
				.attr('clip-path', 'url(#Timeline-ymask)')
		}
	
		const zoomed = () => {
			zoomer(d3.event.transform)
			this.zoomTransformEvent = d3.event
		}

		const opacity = scale => {
			const lower = 1
			const upper = 2
			if(scale < lower) return 0
			if(scale > upper) return 1

			return (scale-lower)/(upper-lower)
		}
	
		const zoomer = transform => {
			const newY = transform.rescaleY(y)

			timeRects
				.attr('y', op => newY(startTime(op)))
				.attr('height', op => newY(hasActivePhase(op) ? now : endTime(op)) - newY(startTime(op)))

			phaseRects
				.attr('y', phase => newY(moment(phase.start)))
				.attr('height', phase => newY(moment(phase.end || now)) - newY(moment(phase.start)))
		
			plannedRects
				.attr('y', phase => newY(moment(phase.start)))
				.attr('height', phase => (newY(moment(phase.end)) - newY(moment(phase.start))))
			
			info
				.attr('transform', op => translate(planX + OPERATIONWIDTH + PADDING, newY(startTime(op))))
			
			d3.selectAll('.UserPlan-extrainfo')
				.attr('opacity', opacity(transform.k))
			
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

		const dayDiff = moment(date).endOf('day').diff(moment(date).startOf('day'))

		const startShow = moment(date).hours(8).minutes(0)
		const endShow = moment(date).hours(18).minutes(0)
		const initialDiff = endShow.diff(startShow)

		const scale = dayDiff/initialDiff

		const endofDayY = y(moment(date).endOf('day'))
		const startY = y(startShow)		

		const initialZoomTransform = d3.zoomIdentity.translate(0, startY - endofDayY).scale(scale)

		const zoomTransform = this.zoomTransformEvent ?
			this.zoomTransformEvent.transform : initialZoomTransform

		this.svg
			.call(zoom)
			.call(zoom.transform, zoomTransform)

		zoomer(zoomTransform)
	}

	render() {
		return (
			<div
				ref = {element => this.container = element}
			>
				<MainHeader
					onMenuClick={this.props.openMenu} 
				/>
				<OperationDrawer
					showDetails
					redirect={this.redirect}
					operation={this.state.selectedOperation}
					open={this.state.operationDrawerOpen}
					onRequestClose={this.closeDrawer}
				/>
			</div>
		)
	}
}

UserPlan.propTypes = {
	user: PropTypes.object,
	openMenu: PropTypes.func,
	date: PropTypes.object,
	operations: PropTypes.array
}

export default UserPlan