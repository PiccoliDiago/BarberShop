export default function modal(state = false, action) {
    switch (action.type) {
        case "SET_MODAL":
            return action.data
        default:
            return state
    }
}