import moment from 'moment'

const data = {
	theaters: [
		{
			id: 0,
			name: 'Theater1',
			operations: [
				{
					id: 0,
					patient: 'Eivind',
					plannedStartTime: '2017-09-20 14:00',
					plannedEndTime: '2017-09-20 14:40',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 14:37',
							end: '2017-09-20 14:53'
						},
						{
							name: 'pretime',
							start: '2017-09-20 14:55',
							end: '2017-09-20 15:01'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 15:03',
							end: '2017-09-20 15:18'
						},
						{
							name: 'posttime',
							start: '2017-09-20 15:19',
							end: '2017-09-20 15:22'
						},
						{
							name: 'postop',
							start: '2017-09-20 15:23',
							end: '2017-09-20 15:37'
						}
					]
				},
				{
					id: 1,
					patient: 'Felix',
					plannedStartTime: '2017-09-20 10:27',
					plannedEndTime: '2017-09-20 11:05',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 10:21',
							end: '2017-09-20 10:51'
						},
						{
							name: 'pretime',
							start: '2017-09-20 11:01',
							end: '2017-09-20 11:10'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 11:12',
							end: '2017-09-20 11:34'
						},
						{
							name: 'posttime',
							start: '2017-09-20 11:35',
							end: '2017-09-20 11:38'
						},
						{
							name: 'postop',
							start: '2017-09-20 11:38',
							end: '2017-09-20 11:58'
						}
					]
				}
			] 
		},
		{
			id: 1,
			name: 'Theater2',
			operations: [
				{
					id: 2,
					patient: 'Nina',
					plannedStartTime: '2017-09-20 14:50',
					plannedEndTime: '2017-09-20 16:25',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 14:49',
							end: '2017-09-20 15:02'
						},
						{
							name: 'pretime',
							start: '2017-09-20 15:02',
							end: '2017-09-20 15:13'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 15:13',
							end: '2017-09-20 15:59'
						},
						{
							name: 'posttime',
							start: '2017-09-20 15:59',
						}
					]
				},
				{
					id: 3,
					patient: 'Fredrik',
					plannedStartTime: '2017-09-20 08:00',
					plannedEndTime: '2017-09-20 09:30',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 08:11',
							end: '2017-09-20 08:43'
						},
						{
							name: 'pretime',
							start: '2017-09-20 08:43',
							end: '2017-09-20 09:00'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 09:02',
							end: '2017-09-20 09:34'
						},
						{
							name: 'posttime',
							start: '2017-09-20 09:36',
							end: '2017-09-20 09:45'
						},
						{
							name: 'postop',
							start: '2017-09-20 09:50',
							end: '2017-09-20 10:00'
						}
					]
				}
			] 
		},
		{
			id: 2,
			name: 'Theater3',
			operations: [
				{
					id: 4,
					patient: 'Jenny',
					plannedStartTime: '2017-09-20 09:20',
					plannedEndTime: '2017-09-20 10:20',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 09:30',
							end: '2017-09-20 09:43'
						},
						{
							name: 'pretime',
							start: '2017-09-20 09:43',
							end: '2017-09-20 09:48'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 09:48',
							end: '2017-09-20 10:00'
						},
						{
							name: 'posttime',
							start: '2017-09-20 10:01',
							end: '2017-09-20 10:10'
						},
						{
							name: 'postop',
							start: '2017-09-20 10:11',
							end: '2017-09-20 10:23'
						}
					]
				},
				{
					id: 5,
					patient: 'Svenn-Helge',
					plannedStartTime: '2017-09-20 10:30',
					plannedEndTime: '2017-09-20 12:00',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 10:43',
							end: '2017-09-20 10:50'
						},
						{
							name: 'pretime',
							start: '2017-09-20 10:52',
							end: '2017-09-20 11:15'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 11:18',
							end: '2017-09-20 11:40'
						},
						{
							name: 'posttime',
							start: '2017-09-20 11:41',
							end: '2017-09-20 11:48'
						},
						{
							name: 'postop',
							start: '2017-09-20 11:48',
							end: '2017-09-20 11:58'
						}
					]
				},
				{
					id: 6,
					plannedStartTime: '2017-09-20 15:00',
					plannedEndTime: '2017-09-20 16:50',
					patient: 'Magnus',
					phases: [
						{
							name: 'preparation',
							start: '2017-09-20 15:11',
							end: '2017-09-20 15:23'
						},
						{
							name: 'pretime',
							start: '2017-09-20 15:24',
							end: '2017-09-20 15:38'
						},
						{
							name: 'knifetime',
							start: '2017-09-20 15:45'
						}
					]
				}
			] 
		}
	]
}

export const operationPhases = {
	preparation: {
		color: '#C6E0FF'
	},
	pretime: {
		color: '#9CCE63'
	},
	knifetime: {
		color: '#6B8E23'
	},
	posttime: {
		color: '#316300'
	},
	postop: {
		color: '#C6E0FF'
	}
}

export const transformData = data => {
	const transformedData = []
	data.theaters.forEach((theater, i) => {
		theater.operations.forEach(operation => {
			const phases = operation.phases.map(phase => {
				return {
					name: phase.name,
					start: moment(phase.start),
					end: phase.end ? moment(phase.end) : null,
					color: operationPhases[phase.name].color,
					column: i
				}
			})
			transformedData.push({...operation, phases: phases, theater: i})
		})})
	return transformedData
}

export default data