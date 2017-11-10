import { actualPhases, planningPhases } from '../data/operations'

import moment from 'moment'

const state = {
	loggedInUser: 0,
	date: moment('2017-10-22'),
	operationPhases: {
		actual: actualPhases,
		planning: planningPhases
	},
	operations: [
		{
			id: 0,
			theater: 0,
			patientName: 'Test olsen',
			patientBirthDate: '1995-09-20',
			plannedPhases: [
				{ id: 0, start: '2017-10-22 13:00', duration: 30 },
				{ id: 1, duration: 60 },
				{ id: 2, duration: 10 }
			],
			phases: [
				{ id: 0, start: '2017-10-22 13:07', end: '2017-10-22 13:20' },
				{ id: 1, start: '2017-10-22 13:20', end: '2017-10-22 13:46' },
				{ id: 2, start: '2017-10-22 13:48', end: '2017-10-22 14:11' },
				{ id: 3, start: '2017-10-22 14:15', end: '2017-10-22 14:31' },
				{ id: 4, start: '2017-10-22 14:34', end: '2017-10-22 14:47' },
			],
			crew: [{id: 0, position: 'Kirurg'}]
		},
		{
			id: 0,
			theater: 0,
			patientName: 'Test hansen',
			patientBirthDate: '1995-09-21',
			plannedPhases: [
				{ id: 0, start: '2017-10-21 13:00', duration: 30 },
				{ id: 1, duration: 60 },
				{ id: 2, duration: 10 }
			],
			phases: [
				{ id: 0, start: '2017-10-21 13:07', end: '2017-10-21 13:20' },
				{ id: 1, start: '2017-10-21 13:20', end: '2017-10-21 13:46' },
				{ id: 2, start: '2017-10-21 13:48', end: '2017-10-21 14:11' },
				{ id: 3, start: '2017-10-21 14:15', end: '2017-10-21 14:31' },
				{ id: 4, start: '2017-10-21 14:34', end: '2017-10-21 14:47' },
			],
			crew: [{id: 1, position: 'Kirurg'}, {id: 0, position: 'Assistent1'}]
		},
		{
			id: 0,
			theater: 0,
			patientName: 'ola nordmann',
			patientBirthDate: '1995-09-22',
			plannedPhases: [
				{ id: 0, start: '2017-10-22 13:00', duration: 30 },
				{ id: 1, duration: 60 },
				{ id: 2, duration: 10 }
			],
			phases: [
				{ id: 0, start: '2017-10-22 13:07', end: '2017-10-22 13:20' },
				{ id: 1, start: '2017-10-22 13:20', end: '2017-10-22 13:46' },
				{ id: 2, start: '2017-10-22 13:48', end: '2017-10-22 14:11' },
				{ id: 3, start: '2017-10-22 14:15', end: '2017-10-22 14:31' },
				{ id: 4, start: '2017-10-22 14:34', end: '2017-10-22 14:47' },
			],
			crew: [{id: 1, position: 'Kirurg'}]
		},
	],
	theaters: [{id: 0, name: 'Teater'}]
}

export default state