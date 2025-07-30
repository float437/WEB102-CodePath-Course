import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client.js'


const ReadPosts = (props) => {

    const [crewmateInfo, setCrewmateInfo] = useState([])

    useEffect(() => {
        const fetchPost = async () =>{
            const {data} = await supabase
                .from('crewmates')
                .select()
                .order('created_at', { ascending: false })

            // set state of posts
            setCrewmateInfo(data)
        }

        fetchPost()
    }, [props])
    
    return (
        <div className="ReadPosts">
            {
                crewmateInfo && crewmateInfo.length > 0 ?
                [...crewmateInfo]
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        name={post.name}
                        speed={post.speed}
                        color={post.color}
                    />
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts