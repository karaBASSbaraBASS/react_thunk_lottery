import {combineReducers} from "redux";
import {itemsHasErrored, itemsIsloading, items, sities} from "./items";
import {cardCountError} from "./cards";

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsloading,
    sities,
    cardCountError
});