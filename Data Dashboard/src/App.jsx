import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import './App.css'
import Sidebar from './Components/Sidebar'
import Summary from './Components/Summary'
import MainDashboard from './Components/MainDashboard'


function App() {

  return (
    <>
      <div className='flexSidebarContainer'>
        <Sidebar/>
        <div className='flexMainContainer'>
          <Summary/>
          <MainDashboard/>
          </div>
        
      </div>
      
    </>
  )
}

export default App
