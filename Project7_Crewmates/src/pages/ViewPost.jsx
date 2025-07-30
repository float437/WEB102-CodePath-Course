import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import {supabase} from '../client'

const EditPost = ({data}) => {

    const {id,name,speed,color} = useParams()
    const [crewmateInfo, setCrewmateInfo] = useState({name: "", speed: 0, color: ""})

    useEffect(() => {
            const fetchPost = async () =>{
                const {data} = await supabase
                    .from('crewmates')
                    .select()
                    .eq('id',id)
    
                // set state of posts
                setCrewmateInfo(data)
            }
    
            fetchPost()
        }, [])

    const toEditPost = async (event) =>{
        event.preventDefault()
        window.location = "/gallery/edit/" + id

    }

    return (
        <>
            <h1>Name : {name}</h1>
            <p>Speed: {speed}</p>
            <p>Color: {color}</p>
            <p>You sure that's fast enough? They could use some more speed.</p>
            <button className="editButton" onClick={toEditPost}>Edit</button>
        </>
        
    )
}

export default EditPost