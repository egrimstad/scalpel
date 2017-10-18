import { connect } from 'react-redux'
import OperationIndex from '../components/OperationDetails/OperationIndex'


const mapStateToProps = (state, ownProps) => {
	return {
		operation: state.operations.find(x => x.id == ownProps.match.params.operationId),
		...ownProps
	}
}

export default connect(
	mapStateToProps,
	null
)(OperationIndex)