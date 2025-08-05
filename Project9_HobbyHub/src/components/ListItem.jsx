import react from "react"
import './ListItem.css'
import { supabase } from "../client"
import {useState, useEffect} from "react"

const ListItem = (props) =>{
        const [up_votes, setUp_Votes] = useState(props.up_votes)
        const [down_votes, setDown_Votes] = useState(props.down_votes)

        const handleUpButton = async (event) =>{
            // updating screen first
            setUp_Votes(up_votes + 1)
            // then calling api
            const { data, error } = await supabase
                .from('prompts')
                .update({ up_votes: up_votes + 1})
                .eq('id', props.id)
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
                .eq('id', props.id)
                .select()

            // if you get an error, reset to what's in the DB
            if (error != null){
                setDown_Votes(data)
            }
        }
    return (
        <div className="list_item">
            <p>ID: {props.id}</p>
            <p>Created: {props.creation_time}</p>
            <p>Q: {props.question}</p>
            <p>Net Value: {props.up_votes - props.down_votes}</p>
            <div className="voting_container">
                <button className="up_vote_button" onClick={handleUpButton}>Rather: {up_votes}</button>
                <button className="down_vote_button" onClick={handleDownButton}>Rather Not: {down_votes}</button>
            </div>
        </div>
    )
}

export default ListItem;