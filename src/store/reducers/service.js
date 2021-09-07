export default function service(state = false, action) {
    switch (action.type) {
        case "SET_SERVICE":
            return action.data
        default:
            return state
    }
}