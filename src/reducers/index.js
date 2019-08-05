import {combineReducers} from "redux";
import {itemsHasErrored, itemsIsloading, items, sities} from "./items";
import {lotteryHasErrored, lotteryIsLoading, generatedNumbers, guessedNumbers} from "./lottery";
import {cardCountError} from "./cards";

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsloading,
    sities,
    cardCountError,
    generatedNumbers,
    lotteryIsLoading,
    lotteryHasErrored,
    guessedNumbers
});