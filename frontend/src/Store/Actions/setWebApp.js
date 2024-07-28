module.exports = (webapp) => (dispatch) =>{
    return dispatch({type:'WEBAPP',payload:webapp})
}