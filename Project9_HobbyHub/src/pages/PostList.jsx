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
                <div className='searchbox'>
                    <form>
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                            <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            />
                        </svg>
                        <input 
                            type="text" 
                            aria-label='Search for a Would you Rather question.'
                            autoComplete='off'
                            id="sortByName" 
                            name="sortByName"
                            placeholder="Search Would you Rather's..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
                
                <button className="" onClick={() => setCreationTime(true)}>Filter by Creation Time</button>
                <button className="" onClick={() => setCreationTime(false)}>Filter by UpVotes</button>
                
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