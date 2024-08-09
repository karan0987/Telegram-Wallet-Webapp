 const toggleDarkMode = (data) => (dispatch) => {
    return dispatch({ type: 'TOGGLE_DARK_MODE', payload: data });
};

export default toggleDarkMode


