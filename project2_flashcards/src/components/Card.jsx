import React from "react"
import './Card.css'

const Card = ({cardQuestion, cardAnswer}) => {
    return (
        <div className="cardBody">
            <div className='CardInfo'>
                <p>{cardQuestion}</p>
                <p>{cardAnswer}</p>
            </div>
        </div>
    )
}

{/* <div className="cardBody">
            <div className='CardQuestion'>
                <p>{cardQuestion}</p>
            </div>
            <div className='CardAnswer'>
                <p>{cardAnswer}</p>
            </div>
        </div> */}

export default Card;