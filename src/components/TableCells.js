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
        //this.getClassName = this.getClassName.bind(this);
    }
    errorCheck = () => {
        console.log("render count")
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
    
    
    createCells = (item,recivedCard) => {
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
    // getClassName = (item,j,recivedCard)=>{
    //     if(recivedCard.length > 0){
    //         let compared = recivedCard.filter((element)=>{
    //             console.log(element === item+j+1)
    //             return element === item+j+1
    //         })
    //         //console.log(compared)
    //         return "lottery__item returnedItem"
    //         //item+j+1 ? :
    //     } else {
    //         return "lottery__item"
            
    //     }
        
    // }
    componentDidMount(prevProps, prevState, snapshot){
        
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevState.checkBoxCounter !== this.state.checkBoxCounter){
            this.errorCheck()
        }
        
    }

    render() {
        const { item, i, recivedCard } = this.props;
        const { checkBoxCounter } = this.state;
        return (
            <div className={ checkBoxCounter>5 ?'lottery__card error':'lottery__card'} key={item}>
                <span className="lottery__cardNumber">{i+1}</span>
                {/*inner loop to create 20 checkboxes*/}
                {this.createCells(item,recivedCard)}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cardCountError: state.cardCountError,
        lotteryIsLoading: state.lotteryIsLoading,
        lotteryHasErrored: state.lotteryHasErrored,
        recivedCard: state.recivedCard
    }
} 
const mapDispatchToProps = dispatch => {
    return {
        cardCountErrorAction: (bool) => dispatch(setCardCountError(bool))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableCells)