import {useState} from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import {supabase} from '../client'

const EditPost = ({data}) => {

    const {id,name,speed,color} = useParams()
    const [crewmateInfo, setCrewmateInfo] = useState({
        name: name || "", 
        speed: speed || 0, 
        color: color || ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmateInfo( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) =>{
        event.preventDefault()
        // grab crewmates table
        // update the object
        // on the column where id is id
        await supabase
            .from('crewmates')
            .update({ name: crewmateInfo.name, speed: crewmateInfo.speed,  color: crewmateInfo.color})
            .eq('id', id)

        // redirects back to home page
        window.location = "/";
    }

    const deletePost = async (event) =>{
        event.preventDefault()
        await supabase
            .from('crewmates')
            .delete()
            .eq('id',id)

        window.location = "/"

    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={crewmateInfo.name}
                    onChange={handleChange} 
                /><br />
                <br/>

                <label htmlFor="speed">Speed</label><br />
                <input 
                    type="number" 
                    id="speed" 
                    name="speed" 
                    value={crewmateInfo.speed}
                    onChange={handleChange} 
                /><br />
                <br/>

                <label>Color</label><br />
                <input 
                    type="radio" 
                    id="red" 
                    name="color" 
                    value="red" 
                    checked={crewmateInfo.color === "red"}
                    onChange={handleChange} 
                />
                <label htmlFor="red">Red</label><br />
                
                <input 
                    type="radio" 
                    id="blue" 
                    name="color" 
                    value="blue" 
                    checked={crewmateInfo.color === "blue"}
                    onChange={handleChange} 
                />
                <label htmlFor="blue">Blue</label><br />
                
                <input 
                    type="radio" 
                    id="green" 
                    name="color" 
                    value="green" 
                    checked={crewmateInfo.color === "green"}
                    onChange={handleChange} 
                />
                <label htmlFor="green">Green</label><br />
                
                <input 
                    type="radio" 
                    id="yellow" 
                    name="color" 
                    value="yellow" 
                    checked={crewmateInfo.color === "yellow"}
                    onChange={handleChange} 
                />
                <label htmlFor="yellow">Yellow</label><br />
                
                <input 
                    type="radio" 
                    id="purple" 
                    name="color" 
                    value="purple" 
                    checked={crewmateInfo.color === "purple"}
                    onChange={handleChange} 
                />
                <label htmlFor="purple">Purple</label><br />
                
                <input 
                    type="radio" 
                    id="orange" 
                    name="color" 
                    value="orange" 
                    checked={crewmateInfo.color === "orange"}
                    onChange={handleChange} 
                />
                <label htmlFor="orange">Orange</label><br />
                <br/>
                
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost