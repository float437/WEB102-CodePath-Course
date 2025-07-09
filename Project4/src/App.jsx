import { useState } from 'react'
import Discover from './components/Discover.jsx'
import CatInfo from './components/CatInfo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [catDescription, setCatDescription] = useState({
    name: '',
    breed: '',
    weight: '',
    countryOfOrigin: '',
    lifespan: '',
    imageLink: ''
  })

  return (
    <>
      <div className='mainInfo'>
        <h1>Trippin' on Cats</h1>
        <h3>Discover Cats from your wildest Dreams!</h3>
        <CatInfo catDescription = {catDescription}/>
        <Discover/>
      </div>
    </>
  )
}

export default App
