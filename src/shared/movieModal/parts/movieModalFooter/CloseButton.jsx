import { CloseButton } from 'genericComponents';
import { connect } from 'react-redux';
import { closeModal } from 'actions';

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(closeModal()),
});

const mapStateToProps = () => ({
    children: 'Close',    
});

export default connect(mapStateToProps, mapDispatchToProps)(CloseButton);

