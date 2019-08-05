import React from 'react';


const Spinner = (props) => {
		
    return (
        <a href={props.link}>
            <img src={props.img} alt="link-img" className="link-img"/>
            {props.text} 
        </a>
    )
		
}

export default Spinner