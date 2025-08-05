import { useState } from 'react'
import { supabase } from '../client' // the supabase variable holding the client state
import {useRoutes, Link} from 'react-router-dom'
// import './CreatePost.css'

const CreatePost = () => {

    const [cardInfo, setCardInfo] = useState({question: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCardInfo( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // from the 'prompts' table
    //  we pass an object w/ the question from the form.
    // .select returns the DB entry once it has been inserted into the DB.
    const createPost = async (event) => {
        event.preventDefault()
        await supabase
            .from('prompts') 
            .insert({question: cardInfo.question})
            .select()
        window.location = "/"
    }

    return (
        <div>
            <form>
                {/* TODO make the input box visible */}
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="question" onChange={handleChange} /><br />
                <br/>
                
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
            {/* TODO: increase margin around button */}
            <Link to="/"> <button className="return_button">Return Home</button> </Link>
        </div>
    )
}

export default CreatePost