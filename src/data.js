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
					startTime: '2017-09-20 14:37',
					endTime: '2017-09-20 15:37'
				},
				{
					id: 1,
					patient: 'Felix',
					plannedStartTime: '2017-09-20 10:27',
					plannedEndTime: '2017-09-20 11:05',
					startTime: '2017-09-20 10:21',
					endTime: '2017-09-20 11:37'
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
					startTime: '2017-09-20 14:49'
				},
				{
					id: 3,
					patient: 'Fredrik',
					plannedStartTime: '2017-09-20 08:00',
					plannedEndTime: '2017-09-20 09:30',
					startTime: '2017-09-20 08:11',
					endTime: '2017-09-20 09:55'
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
					startTime: '2017-09-20 09:30',
					endTime: '2017-09-20 10:07'
				},
				{
					id: 5,
					patient: 'Svenn-Helge',
					plannedStartTime: '2017-09-20 10:30',
					plannedEndTime: '2017-09-20 12:00',
					startTime: '2017-09-20 10:43',
					endTime: '2017-09-20 11:37'
				},
				{
					id: 6,
					plannedStartTime: '2017-09-20 15:00',
					plannedEndTime: '2017-09-20 16:50',
					patient: 'Magnus',
					startTime: '2017-09-20 15:11'
				}
			] 
		},
		{
			id: 3,
			name: 'Theater4',
			operations: [
				{
					id: 7,
					patient: 'Rune',
					plannedStartTime: '2017-09-20 11:20',
					plannedEndTime: '2017-09-20 14:00',
					startTime: '2017-09-20 11:30',
					endTime: '2017-09-20 14:40'
				},
				{
					id: 8,
					patient: 'Øyvind',
					plannedStartTime: '2017-09-20 14:30',
					plannedEndTime: '2017-09-20 15:30',
					startTime: '2017-09-20 15:23'
				}
			] 
		}
	]
}

export const transformData = data => {
	const transformedData = []
	data.theaters.forEach((theater, i) => {
		theater.operations.forEach(operation => {
			transformedData.push({...operation, theater: i})
		})
	})
	return transformedData
}

export default data