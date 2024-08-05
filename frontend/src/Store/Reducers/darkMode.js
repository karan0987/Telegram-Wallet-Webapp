export default (state = false, action) => {
    switch (action.type) {
        case 'DARKMODE':
            return action.payload
        default:
            return state;
    }
};
