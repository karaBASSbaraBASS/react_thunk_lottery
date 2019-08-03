import React from "react";
import { connect } from 'react-redux'
import ShakingError from "./ShakingError";
import Table from "./Table";

class InteractiveBlock extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            this.setState({
                invalid: true,
                displayErrors: true,
            });
            return;
        }
        const form = event.target;
        const data = new FormData(form);
        this.setState({
            res: this.stringifyFormData(data),
            invalid: false,
            displayErrors: false,
        });
    }
    stringifyFormData(fd) {
        const data = {};
            for (let key of fd.keys()) {
                data[key] = fd.get(key);
            }
        return JSON.stringify(data, null, 2);
    }
    
    render(){
        const { res, invalid } = this.state;
        const { cardCountError } = this.props;
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
                        <Table/>    

                        <button className="lottery__sendBtn">Send data!</button>
                    </form>
                    <div className="resultBlock">
                        {cardCountError && (
                            <ShakingError text="You cannot select more than five numbers in one card." />
                        )}
                        {!invalid && res && (
                            <div>
                            
                            <pre>FormData {res}</pre>
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
        cardCountError: state.cardCountError
    }
}
  
export default connect(
    mapStateToProps,
    null
  )(InteractiveBlock);

//"is more than 5?" => 
//divide checkboxes to columns
//checkbox on click "is more than 5?"
//after sending create object with request data
// using "randon" create response data
// const intersection = array1.filter(element => array2.includes(element));

//function randomIntFromInterval(min,max) // min and max included
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
