import state from '../mockState'
import { mapStateToProps } from '../../containers/MyPlan'

describe('MyPlan mapping', () => {
	test(' of state to props', () => {
		const props = mapStateToProps(state, null)
		expect(props.operations.length).toBe(1)

		const operation = props.operations[0]

		expect(operation.role).toBe('Kirurg')
	})
})