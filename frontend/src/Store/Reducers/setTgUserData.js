export default (state = {
    tgUserData: null,
}, action) => {
    switch (action.type) {
        case 'TGDATA':
            return {
                ...state,
                tgUserData: action.data,
            };
        default:
            return state;
    }
};
