import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as d3 from 'd3'

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
				.attr('height', '100%')
		}
	}

	render() {
		return (
			<div
				ref = {element => this.container = element}
			>
			</div>
		)
	}
}

OperationTimeline.propTypes = {
	operation: PropTypes.object
}

export default OperationTimeline