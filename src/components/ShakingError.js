import React from "react";

class ShakingError extends React.Component {
	constructor() { 
        super(); 
        this.state = { 
            key: 0 
        }; 
    }

	componentDidUpdate() {
    // update key to remount the component to rerun the animation
        let stateIncrement = this.state.key;
        stateIncrement += 1;
  	    this.setState({ key: stateIncrement });
    }
  
    render() {
        return (
            <div key={this.state.key} className="errorMessage bounce">
                {this.props.text}
            </div>
        );
    }
}

export default ShakingError;