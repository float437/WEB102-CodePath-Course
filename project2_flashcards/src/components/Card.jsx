import React from "react"
import './Card.css'

const Card = ({cardQuestion, cardAnswer, flipCard, showAnswer}) => {

//  style={{
//         transform: showAnswer ? 'rotateX(180deg)' : 'rotateX(0deg)',
//         transition: 'transform 0.6s'
//       }}
    return (
        <div className="cardBody" id="test" onClick={flipCard}>
            <div className='CardInfo'>
                {showAnswer ? cardAnswer : cardQuestion}
            </div>
        </div>
    )
}

export default Card;