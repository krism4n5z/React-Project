export default function location(state = "Seattle, Wa", action) {
    if (action.type === "CHANGE_LOCATION") {
        return action.payload;
    } else {
        return state;
    }
}