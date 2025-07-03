import React from "react"
import './Card.css'

const Card = ({cardQuestion, cardAnswer, flipCard, showAnswer}) => {
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