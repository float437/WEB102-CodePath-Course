import React from "react"
import './CatInfo.css'

const CatInfo = (props) =>{
    return (<>
        <div className='informationContainer'>
            <h2>{props.catDescription.name}</h2>
            <div className="catInformationList">
                <div className="catInformationButton">{props.catDescription.breed}</div>
                <div className="catInformationButton">{props.catDescription.weight} lbs</div>
                <div className="catInformationButton">{props.catDescription.countryOfOrigin}</div>
                <div className="catInformationButton">{props.catDescription.lifespan} years</div>
                
            </div>
            <img src={props.catDescription.imageLink} width="300px" height="300px"></img>

        </div>
    </>)
}

export default CatInfo;