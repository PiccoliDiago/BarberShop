export default function dark(state = false, action) {
    switch (action.type) {
        case "SET_DARK":
            return action.data
        default:
            return state
    }
}