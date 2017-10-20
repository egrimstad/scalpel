import { connect } from 'react-redux'
import OperationDetails from '../components/OperationDetails/OperationDetails'


const mapStateToProps = (state, ownProps) => {
	return {
		operation: state.operations.find(x => x.id == ownProps.match.params.operationId),
		...ownProps
	}
}

export default connect(
	mapStateToProps,
	null
)(OperationDetails)