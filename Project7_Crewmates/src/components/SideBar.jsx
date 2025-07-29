import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'

const SideBar = () => {
    return(
        <>
            <div className='sideNav'>
                <Link to="/"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
                <p>test Link</p>
                <p>test Link</p>
            </div>
        </>
    )
}

export default SideBar;