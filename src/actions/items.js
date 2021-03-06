export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: items
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function sitiesFetchDataSuccess(sities) {
    return {
        type: 'SITIES_FETCH_DATA_SUCCESS',
        payload: sities
    };
}
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
export function sitiesFetchData(sities) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(sitiesFetchDataSuccess(sities))
        }, 3000);
    };
}
export function setCardCountError(bool) {
    return {
        type: 'CARD_COUNT_ERROR',
        cardCountError: bool
    };
}