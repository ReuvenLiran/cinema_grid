export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA';

export const openModal = () => ({
    type: OPEN_MODAL,
    isOpen: true,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
    isOpen: false,
});

export const updateModal = (data) => ({
    type: UPDATE_MODAL_DATA,
    data,
});

