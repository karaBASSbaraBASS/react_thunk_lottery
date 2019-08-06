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
        this.amIChecked = this.amIChecked.bind(this);
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
    
    
    createCells = (item,generatedNumbers) => {
        let children = []
        //Inner loop to create 20 checkboxes in each card
        for (let j = 0; j < 20; j++) {
            children.push(
                <label className={this.amIChecked(item, j, generatedNumbers)} onClick={this.clickHandler} htmlFor={item+j+1} key={item+j+1} >
                    <input type="checkbox" id="horns" name={item+j+1}></input>
                    <span className="lottery__cellNumber">{`${j + 1}`}</span>
                </label>
            )
        }
        return children;     
    }
    amIChecked = (item,j, generatedNumbers) => { 
        
        if(generatedNumbers.length>0){
            let name = item+j+1
            let filter = generatedNumbers.find((element, index, array)=>{
                return String(name) === element
            })
            //if(generatedNumbers.indexOf( `"${item+j+1}"` ) != -1){
                console.log(filter)
                if(filter){
                    console.log("lottery__item returnedItem")
                    return "lottery__item returnedItem"
                } else{
                    console.log("lottery__item")
                    return "lottery__item"
                }

            // })
            
        }else{
            return "lottery__item"
        }
        
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
        //this.amIChecked(100, 7, ["103","109","111","111","119","202"])
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevState.checkBoxCounter !== this.state.checkBoxCounter){
            this.errorCheck()
        }
        
    }

    render() {
        const { item, i, generatedNumbers } = this.props;
        const { checkBoxCounter } = this.state;
        return (
            <div className={ checkBoxCounter>5 ?'lottery__card error':'lottery__card'} key={item}>
                <span className="lottery__cardNumber">{i+1}</span>
                {/*inner loop to create 20 checkboxes*/}
                {this.createCells(item,generatedNumbers)}
            </div>
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
        cardCountErrorAction: (bool) => dispatch(setCardCountError(bool))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableCells)