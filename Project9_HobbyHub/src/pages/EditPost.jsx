import {useState} from 'react'
import { useParams } from 'react-router-dom'
// import './EditPost.css'
import {supabase} from '../client'

const EditPost = ({data}) => {

    const {id,question} = useParams()
    const [post, setPost] = useState({
        id:  id || null,
         question:  question|| ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) =>{
        event.preventDefault()
        // grab prompts table
        // update the object
        // on the column where id is id
        await supabase
            .from('prompts')
            .update({ question: post.question})
            .eq('id', id)

        // redirects back to home page
        window.location = "/";
    }

    const deletePost = async (event) =>{
        event.preventDefault()
        await supabase
            .from('prompts')
            .delete()
            .eq('id',id)

        window.location = "/"

    }
    const goHome = async (event) =>{
        event.preventDefault()
        window.location = "/"

    }

    return (
        <div>
            <form>
                <label htmlFor="title">Question</label> <br />
                <input type="text" id="question" name="question" value={post.question} onChange={handleChange} /><br />
                <br/>
                <button><input type="submit" value="Submit" onClick={updatePost}/></button>
                <button onClick={goHome}>Home</button>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost