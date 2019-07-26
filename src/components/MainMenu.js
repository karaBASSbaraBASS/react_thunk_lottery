import React from "react";
import FlipCard from "../components/FlipCard";

const MainMenu = () =>{
    return (
        <section className="mainMenu">
            <div className="container maxWidth">
                <div className="col-4 mainMenu__Button">
                    <FlipCard 
                        title="Select numbers" 
                        text="Mark no more than 5 winning numbers in each of the 5 cards."/>
                </div>
                <div className="col-4 mainMenu__Button">
                    <FlipCard 
                        title="Send result" 
                        text="Send the results to find out how much you won."/>
                </div>
                <div className="col-4 mainMenu__Button">
                    <FlipCard 
                        title="Check answear" 
                        text="Compare the winning ticket numbers with your."/>
                </div>
                <div className="col-4 mainMenu__Button">
                    <FlipCard 
                        title="Take money" 
                        text="Transfer the amount won to paypal card!"/>
                </div>
            </div>
        </section>
    )
}

export default MainMenu;


// class TellNumber extends React.Component {
// 	render() {
// 		return (
// 			<span>
// 				{this.props.tel}
// 			</span>
// 			)
// 	}
// }
// class Address extends React.Component {
// 	render() {
// 		return (
// 			<span>
// 				{this.props.addr}
// 			</span>
// 			)
// 	}
// }
// class Manu extends React.Component {
// 	render() {
// 		return (
// 			<Row>
// 				<Col lg={3}>

// 						Ремонт айфонов в сервисном центре и на выезде

// 				</Col>
// 				<Col lg={3} lgOffset={1}>

// 						Пн-пт с 10 до 20, сб,вс с 11 до 18
// 						<div addr="Ленинская, 301"></div>

// 				</Col>
// 				<Col lg={3}>

// 						Звонки принимаются 24 часа
// 						<div tel="8 (846) 922 55 44 "></div>

// 				</Col>
// 				<Col lg={2}>
// 					Заказать звонок!
// 				</Col>
// 			</Row>
// 		)
// 	}
// }

// export default Manu