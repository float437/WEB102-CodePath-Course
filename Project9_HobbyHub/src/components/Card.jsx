import react from "react"
import './Card.css'

const Card = (props) =>{
    return (
        // TODO: fill out the card element with name, up and down vote. 
        // Might not need to use id / time but pass it anyways.
        <div className="selected_card_element">
            <p>Toggleable Card Element Here</p>
            <p>{props.id}</p>
            <p>{props.question}</p>
            <div className="voting_container">
                <button>{props.up_votes}</button>
                <button>{props.down_votes}</button>
            </div>
        </div>
    )
}

export default Card;