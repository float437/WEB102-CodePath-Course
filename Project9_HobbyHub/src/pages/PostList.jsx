//Copy of the ReadPosts.jsx
// Renders the list of Posts
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import ListItem from '../components/ListItem.jsx'
import {useRoutes, Link} from 'react-router-dom'
import { supabase } from '../client.js'
import './PostList.css'


const PostList = () => {
    const [cardInfo, setCardInfo] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [creation_time, setCreationTime] = useState(true);
    const [searchTerm, setSearchTerm] = useState("")

    const fetchPost = async (column) =>{
        const {data} = await supabase
            .from('prompts')
            .select()
            .order(column, { ascending: false })

        // set state for the card's info; it holds whatever came back from the prompts DB.
        setCardInfo(data)
        setFilteredPosts(data) // Initialize filtered posts with all posts
    }

    // Filter posts based on search term
    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredPosts(cardInfo)
        } else {
            const filtered = cardInfo.filter(post => 
                post.question && post.question.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredPosts(filtered)
        }
    }, [searchTerm, cardInfo])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        let column = 'created_at'
        fetchPost(column)
    }, [])

    useEffect(() => {
        const column = creation_time ? 'created_at' : 'up_votes'
        fetchPost(column)
    }, [creation_time])

    return (
        <>
            <div className="sorting_area">
                <button className="" onClick={() => setCreationTime(true)}>Filter by Creation Time</button>
                <button className="" onClick={() => setCreationTime(false)}>Filter by UpVotes</button>
                <form>
                    <input 
                        type="text" 
                        id="sortByName" 
                        name="sortByName"
                        placeholder="Search questions..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
            <div className="read_posts">
                {
                    filteredPosts && filteredPosts.length > 0 ?
                    [...filteredPosts]
                    .map((post,index) => // TODO: understand the mapping here and how it works.
                        // TODO: once the item is clicked, it will take you to the specific card's page.
                        <ListItem 
                            key={post.id}
                            id={post.id} 
                            creation_time = {post.created_at}
                            question={post.question}
                            up_votes={post.up_votes}
                            down_votes={post.down_votes}
                        />
                    ) : <h2>{searchTerm ? "No matching questions found 🔍" : "No Rather's Created  😞"}</h2>
                }
                
            </div>  
            <div className="new_prompt_buttons">
                <Link to="/new"> <button className="new_prompt_button">Create a Would You Rather!</button> </Link>
            </div>
        </>
            
    )
}

export default PostList