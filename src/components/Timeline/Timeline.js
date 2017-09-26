import React, { Component } from 'react'
import data , { transformData } from './data'
import { Timeline as visTimeline, DataSet } from 'vis/index-timeline-graph2d'
import 'vis/dist/vis-timeline-graph2d.min.css'
import moment from 'moment'

import './Timeline.css'

const TODAY = '2017-09-20'

class Timeline extends Component {
	constructor(props) {
		super(props)

		this.timelineDiv = null
	}

	componentDidMount() {
		const items = new DataSet(transformData(data).map(item => {
			return {
				id: item.id,
				start: item.startTime,
				end: item.endTime,
				group: item.theater
			}
		}))

		const groups = new DataSet(data.theaters.map(theater => {
			return {
				id: theater.id,
				content: theater.name
			}
		}))

		const options = {
			verticalScroll: true,
			zoomable: true,
			min: moment(TODAY).startOf('day'),
			max: moment(TODAY).endOf('day'),
			align: 'right',
			stack: false,
		}

		const timeline = new visTimeline(this.timelineDiv)
		timeline.setOptions(options)
		timeline.setGroups(groups)
		timeline.setItems(items)
	}

	render() {
		return (
			<div 
				ref = {element => this.timelineDiv = element}
			/>
		)
	}
}

export default Timeline