export function cardCountError(state = false, action) {
    switch(action.type) {
        case 'CARD_COUNT_ERROR':
            return action.cardCountError;
        default:
            return state;
    }
}