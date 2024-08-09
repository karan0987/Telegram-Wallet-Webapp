export default (state = {}, action) => {
    if (action.type == 'WEBAPP') {
        return action.payload
    } else {
        return state
    }
}