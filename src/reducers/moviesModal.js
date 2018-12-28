import { 
    CLOSE_MODAL,
    OPEN_MODAL,
    UPDATE_MODAL_DATA,
} from 'actions';

const initailState = {
    isOpen: false,
    data: {
        director: null,
        year: null,
        title: null,
        genreIds: [],
        runtime: null,
    },
};

export default (state = initailState, action) => {
    console.log(action.type);
	switch (action.type) {
    case CLOSE_MODAL: {
        const { isOpen } = action;
        return {...state, isOpen };
    }
    case OPEN_MODAL: {
        const { isOpen } = action;
        return {...state, isOpen };
    }
    case UPDATE_MODAL_DATA: {
        console.log({action})
        const { data } = action;
        const newState = ({ ...state, 
            data: { ...state.data, ...data },
        });
        console.log({
            newState,
            data,
        })
        return newState;
    }
	default:
		return state
	}
};
