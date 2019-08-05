export function lotteryHasErrored(state = false, action) {
    switch(action.type) {
        case 'LOTTERY_HAS_ERRORED':
            return action.lotteryErrored;
        default:
            return state;
    }
}
export function lotteryIsLoading(state = false, action) {
    switch(action.type) {
        case 'LOTTERY_RESP_IS_LOADING':
            return action.lotteryisLoading;
        default:
            return state;
    }
}
export function generatedNumbers(state = [], action) {
    switch(action.type) {
        case 'LOTTERY_FETCH_DATA_SUCCESS':
            return action.generatedNumbers;
        default:
            return state;
    }
}
export function guessedNumbers(state = [], action) {
    switch(action.type) {
        case 'LOTTERY_FETCH_CALC_GUESSED':
            return action.guessedNumbers;
        default:
            return state;
    }
}
