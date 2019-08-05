import { numberLiteralTypeAnnotation } from "@babel/types";

function randomIntFromInterval(min,max) 
// min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function lotteryHasErrored(bool) {
    return {
        type: 'LOTTERY_HAS_ERRORED',
        lotteryErrored: bool
    };
}

export function lotteryFetchDataSuccess(items) {
    return {
        type: 'LOTTERY_FETCH_DATA_SUCCESS',
        generatedNumbers: items
    };
}
export function lotteryFetchCalcGuessed(items) {
    return {
        type: 'LOTTERY_FETCH_CALC_GUESSED',
        guessedNumbers: items
    };
}

export function lotteryIsLoading(bool) {
    return {
        type: 'LOTTERY_RESP_IS_LOADING',
        lotteryisLoading: bool
    };
}

export function lotteryFetchData(selectedNames) {
    return (dispatch) => {
        dispatch(lotteryIsLoading(false));

        new Promise ((resolve, reject)=>{
            dispatch(lotteryIsLoading(true));
            setTimeout(() => {
                // generate random result matrix after 3 sec
                let arr = [];
                for(let i = 1; i<6; i++) {
                    for(let i = 1; i<6; i++) {
                        let rand = randomIntFromInterval(1,20);
                        arr.push(`${i*100+rand}`);
                    };
                };
                resolve(arr)
            }, 3000);
        })
            // filter guessed numbers
            .then((generated) => {
                let guessed = [];
                selectedNames.forEach((name)=>{
                    generated.filter((item)=>{
                        if(item === name){
                            guessed.push(name)
                        }
                    })
                })
                let allInOne = {}
                generated=generated.sort();
                guessed=guessed.sort();
                return allInOne = {generated, guessed};
            })
            // create action and return generatet and guessed data to the store
            .then((response) => {
                dispatch(lotteryFetchDataSuccess(response.generated))
                dispatch(lotteryFetchCalcGuessed(response.guessed))
                dispatch(lotteryIsLoading(false));
            })
    };
}