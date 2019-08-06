import React from 'react';
import { connect } from 'react-redux'
import TableCells from './TableCells';

class Table extends React.Component{
    constructor() {
        super();
        this.state = {
            totalCards: [100,200,300,400,500]
        };
    }

    render() {
        return (
            <div className={ this.props.cardCountError?'lottery__wrapper error':'lottery__wrapper'}>
                {/*Outer loop to create 5 cards*/}
                {this.state.totalCards.map((item, i)=>{
                    return(
                        <TableCells item={item} i={i} key={item}/>
                    )
                })}         
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
  
export default connect(
    mapStateToProps,
    null
  )(Table)