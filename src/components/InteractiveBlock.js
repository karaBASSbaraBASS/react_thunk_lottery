import React from "react";
import { connect } from 'react-redux'
import ShakingError from "./ShakingError";
import Table from "./Table";
import { lotteryFetchData } from "../actions/lottery";

class InteractiveBlock extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);
        const result = this.getCheckedNames(data);
        const selectedNames = Object.keys(result);
        this.props.checkLotteryCard(selectedNames);

        this.setState({
            formData: JSON.stringify(selectedNames),
            invalid: false,
            displayErrors: false,
        });
    }
    getCheckedNames(fd) {
        const data = {};
            for (let key of fd.keys()) {
                data[key] = fd.get(key);
            }
        return data;
    }
    
    render(){
        const { formData, invalid } = this.state;
        const { cardCountError, lotteryIsLoading, lotteryHasErrored, generatedNumbers, guessedNumbers } = this.props;
        return (
            <section className="lottery">
                <div className="container maxWidth">
                    <div className="lottery__heading">
                        <h3>Smashed the phone?</h3>
                        <h3>No problem!</h3>
                        <h1>Win the lottery and buy a new one!</h1>
                    </div>
                    <form className="lottery__form" onSubmit={this.handleSubmit}>
                        {/* Generate table */}
                        <Table />    

                        <button className={lotteryIsLoading ? "disabled lottery__sendBtn": "lottery__sendBtn" } disabled={cardCountError}>
                            {lotteryIsLoading? 
                                <div className="loader"></div> :
                                "Send data!"
                            }
                        </button>
                    </form>
                    <div className="resultBlock">
                        {cardCountError && (
                            <ShakingError text="You cannot select more than five numbers in one card." />
                        )}
                        {!lotteryHasErrored && generatedNumbers.length>0 &&(
                            <div>
                                <div>generated: {JSON.stringify(generatedNumbers)}</div>
                                <div>guessed: {JSON.stringify(guessedNumbers)}</div>
                                <Table generatedNumbers guessedNumbers/>
                            </div>
                            
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cardCountError: state.cardCountError,
        lotteryIsLoading: state.lotteryIsLoading,
        lotteryHasErrored: state.lotteryHasErrored,
        generatedNumbers: state.generatedNumbers,
        guessedNumbers: state.guessedNumbers,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        checkLotteryCard: (selectedNames) => dispatch(lotteryFetchData(selectedNames))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InteractiveBlock);
