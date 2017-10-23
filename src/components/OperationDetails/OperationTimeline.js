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
		}

		const operation = this.props.operation

		const width = this.svg.node().getBoundingClientRect().width
		const height = this.svg.node().getBoundingClientRect().height
		const start = startTime(operation)
		const end = endTime(operation)

		const padding = 2
		const actualHeight = height*0.6
		const plannedHeight = height - actualHeight - 3*padding

		const time = d3.scaleTime()
			.domain([moment(start), moment(end)])
			.range([padding, width-padding])
		
		this.svg.append('g').selectAll('rect')
			.data(startedPhases(operation))
			.enter()
			.append('rect')
			.attr('x', phase => time(moment(phase.start)))
			.attr('y', padding)
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
			.attr('y', actualHeight + 2*padding)
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
	height: PropTypes.number
}

export default OperationTimeline