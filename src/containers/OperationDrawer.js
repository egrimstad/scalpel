import OperationDrawer from '../components/OperationDrawer/OperationDrawer'
import { connect } from 'react-redux'

import { finishOperationPhase, startNextOperationPhase} from '../actions'

const mapStateToProps = (state, ownProps) => {
	return ownProps
}

const mapDispatchToProps = dispatch => {
	return {
		onEndPhase: (operationId, time) => {
			dispatch(finishOperationPhase(operationId, time))
		},
		onStartNextPhase: (operationId, time) => {
			dispatch(startNextOperationPhase(operationId, time))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationDrawer)