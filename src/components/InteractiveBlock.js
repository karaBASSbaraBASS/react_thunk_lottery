import React from "react";
import ShakingError from "./ShakingError";

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
    createTable = () => {
        let table = []
        // Outer loop to create 5 cards
        for (let i = 0; i < 5; i++) {
            let children = []
            //Inner loop to create 20 checkboxes in each card
            for (let j = 0; j < 20; j++) {
                children.push(
                    <label className="lottery__item" for={j + 1}>
                        <input type="checkbox" id="horns" name={j + 1}></input>
                        <span className="lottery__cellNumber">{`${j + 1}`}</span>
                    </label>
                )
            }
            //Create the card and add the checkboxes
            table.push(
                <div className="lottery__card">
                    <span className="lottery__cardNumber">{i+1}</span>
                    {children}
                </div>
            )
        }
        return table
    }
    
    render(){
        const { res, invalid, displayErrors } = this.state;
        return (
            <section className="lottery">
                <div className="container maxWidth">
                    <div className="lottery__heading">
                        <h3>Smashed the phone?</h3>
                        <h3>No problem!</h3>
                        <h1>Win the lottery and buy a new one!</h1>
                    </div>
                    <form className="lottery__form" onSubmit={this.handleSubmit}>
                        {/* Generate tablr of */}
                        <div className="lottery__wrapper">
                            {this.createTable()}
                        </div>    
                        

                        <button className="lottery__sendBtn">Send data!</button>
                    </form>
                    <div className="res-block">
                        {invalid && (
                            <ShakingError text="You cannot select more than five numbers in one card." />
                        )}
                        {!invalid && res && (
                            <div>
                            <h3>Transformed data to be sent:</h3>
                            <pre>FormData {res}</pre>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default InteractiveBlock;