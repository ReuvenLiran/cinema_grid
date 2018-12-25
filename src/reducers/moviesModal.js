import { 
    CLOSE_MODAL,
    OPEN_MODAL,
} from '../actions';

const initailState = {
    isOpen: false,
};

export default (state = initailState, action) => {
	switch (action.type) {
    case CLOSE_MODAL: {
        const { isOpen } = action;
        return {...state, isOpen };
    }
    case OPEN_MODAL: {
        const { isOpen } = action;
        return {...state, isOpen };
    }
	default:
		return state
	}
};
