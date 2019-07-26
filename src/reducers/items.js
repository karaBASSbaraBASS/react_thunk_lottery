export function itemsHasErrored(state = false, action) {
    switch(action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsloading(state = false, action) {
    switch(action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch(action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}
export function sities(state = [], action) {
    switch(action.type) {
        case 'SITIES_FETCH_DATA_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}