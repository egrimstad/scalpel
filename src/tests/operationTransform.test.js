import { actualPhases, planningPhases } from '../data/operations'
import { transformOperation, distributeOperations } from '../utils/operationTransform'

const operation = {
	id: 0,
	patientName: 'Test testesen',
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
}

const operation2 = {
	id: 1,
	patientName: 'Test testerino',
	plannedPhases: [
		{ id: 0, start: '2017-10-22 13:50', duration: 30 },
		{ id: 1, duration: 60 },
		{ id: 2, duration: 10 }
	],
	phases: [
		{ id: 0, start: '2017-10-22 14:01', end: '2017-10-22 14:09' },
		{ id: 1, start: '2017-10-22 14:10', end: '2017-10-22 14:26' },
		{ id: 2, start: '2017-10-22 14:28', end: '2017-10-22 14:41' },
		{ id: 3, start: '2017-10-22 14:45', end: '2017-10-22 14:51' },
		{ id: 4, start: '2017-10-22 14:55', end: '2017-10-22 15:27' },
	],
}

const operation3 = {
	id: 2,
	patientName: 'Test testemann',
	plannedPhases: [
		{ id: 0, start: '2017-10-22 15:50', duration: 30 },
		{ id: 1, duration: 60 },
		{ id: 2, duration: 10 }
	],
	phases: [
		{ id: 0, start: '2017-10-22 16:01', end: '2017-10-22 16:09' },
		{ id: 1, start: '2017-10-22 16:10', end: '2017-10-22 16:26' },
		{ id: 2, start: '2017-10-22 16:28', end: '2017-10-22 16:41' },
		{ id: 3, start: '2017-10-22 16:45', end: '2017-10-22 16:51' },
		{ id: 4, start: '2017-10-22 16:55', end: '2017-10-22 17:27' },
	],
}

const state = {
	operationPhases: {
		actual: actualPhases,
		planning: planningPhases
	}
}

describe('operation transformation utils', () => {
	test('transforms an operation correctly', () => {
		const transformed = transformOperation(operation, state)

		// Added correct end times
		expect(transformed.plannedPhases[0].end).toBe('2017-10-22 13:30')
		expect(transformed.plannedPhases[1].start).toBe('2017-10-22 13:30')
		expect(transformed.plannedPhases[1].end).toBe('2017-10-22 14:30')
		expect(transformed.plannedPhases[2].start).toBe('2017-10-22 14:30')
		expect(transformed.plannedPhases[2].end).toBe('2017-10-22 14:40')

		// Added correct name and color props
		transformed.plannedPhases.forEach(plannedPhase => {
			const planningPhase = planningPhases.find(p => p.id == plannedPhase.id)
			expect(plannedPhase.name).toBe(planningPhase.name)
			expect(plannedPhase.color).toBe(planningPhase.color)
		})

		transformed.phases.forEach(phase => {
			const actualPhase = actualPhases.find(p => p.id == phase.id)
			expect(phase.name).toBe(actualPhase.name)
			expect(phase.color).toBe(actualPhase.color)
		})
	})

	test('distributes operations correctly', () => {
		const allOperations = [operation, operation2, operation3]

		const { operations, columns } = distributeOperations(allOperations, state)

		expect(columns).toBe(2)

		expect(operations.find(op => op.id == 0).column).toBe(0)
		expect(operations.find(op => op.id == 1).column).toBe(1)
		expect(operations.find(op => op.id == 2).column).toBe(0)
	})
})