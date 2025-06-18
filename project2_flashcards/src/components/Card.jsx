import React from "react"
import './Card.css'

const Card = ({cardQuestion, cardAnswer, flipCard, showAnswer}) => {

//  style={{
//         transform: showAnswer ? 'rotateX(180deg)' : 'rotateX(0deg)',
//         transition: 'transform 0.6s'
//       }}

    return (
  <>
    <div className={`cardBody ${showAnswer ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="cardFront">
        {cardQuestion}
      </div>
      <div className="cardBack">
        {cardAnswer}
      </div>
    </div>
  </>
)
}

export default Card;