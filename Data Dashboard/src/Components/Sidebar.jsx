import { useEffect, useState } from "react"
import "./Sidebar.css"
import { Outlet } from "react-router"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const Sidebar = (props) => {
    return(
        <>
            <p className="SidebarBody">Sidebar Here</p>
            <Outlet/>
        </>
    )
}
    
export default Sidebar
