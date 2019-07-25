import {combineReducers} from "redux";
import {itemsHasErrored, itemsIsloading, items, sities} from "./items";

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsloading,
    sities
});