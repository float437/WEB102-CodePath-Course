import React from "react"
import './CatInfo.css'

const CatInfo = (props) =>{
    return (<>
        <div className='informationContainer'>
            <h2>{props.catDescription.name}</h2>
            <div>Buttons will go here in a list </div>
            <div>image of x by y pixels here</div>

        </div>
    </>)
}

export default CatInfo;