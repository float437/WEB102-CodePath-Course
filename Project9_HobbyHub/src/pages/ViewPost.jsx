// import './Default.css'
import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { supabase } from '../client.js'

const ViewPost = () => {
    const [question, setQuestion] = useState("");
    const [up_votes, setUp_Votes] = useState();
    const [down_votes, setDown_Votes] = useState();
    
    const{id} = useParams()

    const fetchPost = async () =>{
            const { data, error } = await supabase
                .from('prompts')
                .select('id, question, up_votes, down_votes')
                .eq('id', id)
            // set state for the card's info; it holds whatever came back from the prompts DB.
            setQuestion(data[0].question)
            setUp_Votes(data[0].up_votes)
            setDown_Votes(data[0].down_votes)
        }
    

    useEffect(() => {
        fetchPost()

    },[])

    const handleUpButton = async (event) =>{
        // updating screen first
        setUp_Votes(up_votes + 1)
        // then calling api
        const { data, error } = await supabase
            .from('prompts')
            .update({ up_votes: up_votes + 1})
            .eq('id', id)
            .select()

        // if you get an error, reset to what's in the DB
        if (error != null){
            setUp_Votes(data)
        }
    }

    const handleDownButton = async (event) =>{
        // updating screen first
        setDown_Votes(down_votes + 1)
        // then calling api
        const { data, error } = await supabase
            .from('prompts')
            .update({ down_votes: down_votes + 1})
            .eq('id', id)
            .select()

        // if you get an error, reset to what's in the DB
        if (error != null){
            setDown_Votes(data)
        }
    }

    return (
        <div>
            <h1>Question: {question}</h1>
            <h2>New Votes: {up_votes - down_votes}</h2>
            <h2>Up Votes: {up_votes}</h2>
            <h2>Down Votes: {down_votes}</h2>
            <div className="voting_container">
                <button className="up_vote_button" onClick={handleUpButton}>Rather: {up_votes}</button>
                <button className="down_vote_button" onClick={handleDownButton}>Rather Not: {down_votes}</button>
            </div>
            <Link to={`/edit/${id}`} ><button className="edit_button" >Edit Me!</button></Link>
        </div>
    )
}

export default ViewPost