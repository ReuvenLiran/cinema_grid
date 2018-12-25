import { connect } from 'react-redux';
import { openModal } from '../../actions';
import MovieCardContent from './MovieCardContent';

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal()),
});

export default connect(null, mapDispatchToProps)(MovieCardContent);

