import React from "react";
import './MultiplierCard.css';

const MultiplierCard = ({name, multiplier, cost}) =>{
    return (
        <div className="multiplierCard">
            <div> {name}</div>
            <div> {multiplier}</div>
            <div> {cost}</div>
        </div>
    )
} 

export default MultiplierCard;