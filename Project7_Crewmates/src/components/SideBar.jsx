import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'

const SideBar = () => {
    return(
        <>
            <div className='sideNav'>
                <Link to="/"><button className="headerBtn"> Home  </button></Link>
                <Link to="/new"><button className="headerBtn"> Create A Crewmate!  </button></Link>
                <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery  </button></Link>
            </div>
        </>
    )
}

export default SideBar;