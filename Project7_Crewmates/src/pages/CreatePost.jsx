import { useState } from 'react'
import { supabase } from '../client' // the supabase variable holding the client state
import './CreatePost.css'

const CreatePost = () => {

    const [crewmateInfo, setCrewmateInfo] = useState({name: "", speed: 0, color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmateInfo( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // from the 'Posts' table
    //  we pass an object w/ the title, post, and description from the form.
    // .select returns the DB entry once it has been inserted into the DB.
    const createPost = async (event) => {
        event.preventDefault()
        await supabase
            .from('crewmates') 
            .insert({name: crewmateInfo.name, speed: crewmateInfo.speed, color: crewmateInfo.color})
            .select()
        window.location = "/"
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label>Color</label><br />
                <input type="radio" id="red" name="color" value="red" onChange={handleChange} />
                <label htmlFor="red">Red</label><br />
                
                <input type="radio" id="blue" name="color" value="blue" onChange={handleChange} />
                <label htmlFor="blue">Blue</label><br />
                
                <input type="radio" id="green" name="color" value="green" onChange={handleChange} />
                <label htmlFor="green">Green</label><br />
                
                <input type="radio" id="yellow" name="color" value="yellow" onChange={handleChange} />
                <label htmlFor="yellow">Yellow</label><br />
                
                <input type="radio" id="purple" name="color" value="purple" onChange={handleChange} />
                <label htmlFor="purple">Purple</label><br />
                
                <input type="radio" id="orange" name="color" value="orange" onChange={handleChange} />
                <label htmlFor="orange">Orange</label><br />
                <br/>
                
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost