const setTgUserData = (data) => (dispatch) => {
    return dispatch({ type: 'TGDATA', data });
};

export default setTgUserData;
