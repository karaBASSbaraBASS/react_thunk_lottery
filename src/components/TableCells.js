import React from 'react';
import { connect } from 'react-redux'
import { setCardCountError } from "../actions/items";

class TableCells extends React.Component{
    constructor() {
        super();
        this.state = {
            checkBoxCounter: 0
        };
        this.createCells = this.createCells.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.errorCheck = this.errorCheck.bind(this);
    }
    errorCheck = () => {
        if(this.state.checkBoxCounter>5){
            this.props.cardCountErrorAction(true)
        }else{
            this.props.cardCountErrorAction(false)
        }
    }
    clickHandler = (e) => {
        let checkboxActive = e.target.checked;
        if (checkboxActive) {
            this.setState({checkBoxCounter: this.state.checkBoxCounter + 1 });
        } else {
            this.setState({checkBoxCounter: this.state.checkBoxCounter - 1 });
        }
    }
    
    
    createCells = (item) => {
        let children = []
        //Inner loop to create 20 checkboxes in each card
        for (let j = 0; j < 20; j++) {
            children.push(
                <label className="lottery__item" onClick={this.clickHandler} htmlFor={item+j+1} key={item+j+1} >
                    <input type="checkbox" id="horns" name={item+j+1}></input>
                    <span className="lottery__cellNumber">{`${j + 1}`}</span>
                </label>
            )
        }
        return children;
            
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        this.errorCheck()
    }

    render() {
        const { item, i } = this.props;
        const { checkBoxCounter } = this.state;
        return (
            <div className={ checkBoxCounter>5 ?'lottery__card error':'lottery__card'} key={item}>
                <span className="lottery__cardNumber">{i+1}</span>
                {/*inner loop to create 20 checkboxes*/}
                {this.createCells(item)}
            </div>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        cardCountErrorAction: (bool) => dispatch(setCardCountError(bool))
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(TableCells)