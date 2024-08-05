const darkMode = (data) => (dispatch) => {
    return dispatch({ type: 'DARKMODE', payload: data });
};

export default darkMode;
