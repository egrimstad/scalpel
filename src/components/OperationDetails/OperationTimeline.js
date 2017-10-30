import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3'
import moment from 'moment'

import { startedPhases, startTime, endTime } from 'utils/operationUtils'

class OperationTimeline extends Component {
	constructor(props) {
		super(props)

		this.container = null

		this.buildOperationTimeline = this.buildOperationTimeline.bind(this)
	}

	componentDidMount() {
		this.buildOperationTimeline()
	}

	componentDidUpdate() {
		this.buildOperationTimeline()
	}

	buildOperationTimeline() {
		if(this.svg) {
			this.svg.selectAll('*').remove()
		}else {
			this.svg = d3.select(this.container).append('svg')
				.attr('width', '100%')
				.attr('height', this.props.height || '100%')
				.attr('class', 'OperationTimeline-svg')
				.on('click', this.props.onClick)
		}

		const operation = this.props.operation

		const width = this.svg.node().getBoundingClientRect().width
		const height = this.svg.node().getBoundingClientRect().height
		const start = startTime(operation)
		const end = endTime(operation)

		const actualY = 20
		const verticalPadding = 2
		const horizontalPadding = 15
		const timelineHeight = height - actualY - verticalPadding
		const actualHeight = timelineHeight*0.6
		const plannedY = actualY + actualHeight + verticalPadding
		const plannedHeight = timelineHeight-actualHeight - verticalPadding


		const time = d3.scaleTime()
			.domain([moment(start), moment(end)])
			.range([horizontalPadding, width-horizontalPadding])
		
		const labels = d3.axisBottom(time)
			.tickSizeOuter(10)
			.ticks(5)
			.tickFormat(d3.timeFormat('%H:%M'))
		
		this.svg.call(labels)
		
		this.svg.append('g').selectAll('rect')
			.data(startedPhases(operation))
			.enter()
			.append('rect')
			.attr('x', phase => time(moment(phase.start)))
			.attr('y', actualY)
			.attr('height', actualHeight)
			.attr('width', phase => time(moment(phase.end || end)) - time(moment(phase.start)))
			.attr('fill', phase => phase.color)
		
		this.svg.append('g')
			.attr('style', 'outline: thin solid gray')
			.selectAll('rect')
			.data(operation.plannedPhases)
			.enter()
			.append('rect')
			.attr('x', phase => time(moment(phase.start)))
			.attr('y', plannedY)
			.attr('height', plannedHeight)
			.attr('width', phase => time(moment(phase.end || end)) - time(moment(phase.start)))
			.attr('fill', phase => phase.color)
		
		
		
	}

	render() {
		return (
			<div style={{width: '100%', height: '100%'}}
				ref = {element => this.container = element}
			>
			</div>
		)
	}
}

OperationTimeline.propTypes = {
	operation: PropTypes.object,
	height: PropTypes.number,
	onClick: PropTypes.func
}

export default OperationTimeline