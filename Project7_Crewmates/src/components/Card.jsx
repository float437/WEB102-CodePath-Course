import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import {supabase} from '../client'


const Card = (props) =>  {

  const [count, setCount] = useState(props.betCount)

  // const updateCount = async(event) => {
  //   event.preventDefault()
  //   const {data} = await supabase.from('Posts').update({betCount : count + 1}).eq('id', id)
  //   setCount(data)
  // }

  const handleClick = () =>{
    // <Link to={'edit/'+ props.id}></Link>
    window.location = "gallery/" + props.id + "/name/" + props.name + "/speed/" + props.speed + "/color/" + props.color
  }

  return (
      <div className="Card">
          {/* <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link> */}
          <Link to={"/gallery/edit/" + props.id + "/name/" + props.name + "/speed/" + props.speed + "/color/" + props.color}><img className="moreButton" alt="edit button" src={more} /></Link>
          <div className='cardInfo' onClick={handleClick}>
            <h3 className="name">{props.name}</h3>
            <p className="speed">{props.speed +" mph"}</p>
            <p className="color">{props.color}</p>
          </div>
          
          {/* <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button> */}
      </div>
  );
};

export default Card