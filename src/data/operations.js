const operations = [
	{
		id: 0,
		theater: 0,
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
		theater: 0,
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
	},
	{
		id: 2,
		theater: 1,
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
		theater: 1,
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
	},
	{
		id: 4,
		theater: 2,
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
		theater: 2,
		patient: 'Svenn-Helge',
		plannedStartTime: '2017-09-20 10:30',
		plannedEndTime: '2017-09-20 12:00',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 10:05',
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
		theater: 2,
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
		],
	},
	{
		id: 7,
		theater: 3,
		plannedStartTime: '2017-09-20 14:00',
		plannedEndTime: '2017-09-20 15:20',
		patient: 'Letizia',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 14:05',
				end: '2017-09-20 14:20'
			},
			{
				name: 'pretime',
				start: '2017-09-20 14:20',
				end: '2017-09-20 14:31'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 14:33',
				end: '2017-09-20 14:45'
			},
			{
				name: 'posttime',
				start: '2017-09-20 14:45',
				end: '2017-09-20 15:05'
			},
			{
				name: 'postop',
				start: '2017-09-20 15:06',
				end: '2017-09-20 15:30'
			},
		]
	},
	{
		id: 8,
		theater: 4,
		plannedStartTime: '2017-09-20 13:00',
		plannedEndTime: '2017-09-20 13:58',
		patient: 'Tor',
		phases: [
			{
				name: 'preparation',
				start: '2017-09-20 13:07',
				end: '2017-09-20 13:20'
			},
			{
				name: 'pretime',
				start: '2017-09-20 13:20',
				end: '2017-09-20 13:46'
			},
			{
				name: 'knifetime',
				start: '2017-09-20 13:48',
				end: '2017-09-20 14:11'
			},
			{
				name: 'posttime',
				start: '2017-09-20 14:15',
				end: '2017-09-20 14:31'
			},
			{
				name: 'postop',
				start: '2017-09-20 14:34',
				end: '2017-09-20 14:47'
			},
		]
	}
]

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

export default operations