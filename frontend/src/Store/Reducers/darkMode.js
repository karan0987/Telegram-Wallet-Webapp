// Store/Reducers/darkModeReducer.js
const initialState = false;

const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return action.payload;
        default:
            return state;
    }
};

export default darkModeReducer;
