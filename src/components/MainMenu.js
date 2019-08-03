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