import React from "react";
import './Card.css';

// returns card object, will hold Name, type of Food, Link to Menu.
//  By passing in the name and the type with {} surrounding it, I can have defualt values if nothing gets passed.
// for example name = "DefaultName".
const Card =({name = "DefaultName", type= "DefaultType", image, menuLink})=>{
    return( 
            <div class="cardBody">
                
                    <div class="cardGrid">
                        <img src={image} class="cardImage"></img>
                        <h3 class="cardTitle">{name} </h3>
                        <h4>{type} </h4>
                        <a href={menuLink} target="_blank" class="cardMenuLink">Menu Link</a>
                    </div>

            </div>
    )
}

export default Card;