import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_CAT_APP_ACCESS_KEY
import Discover from './components/Discover.jsx'
import CatInfo from './components/CatInfo.jsx'
import './App.css'

function App() {
  const [banlist, setBanlist] = useState({
    breeds: [],
    origins: [],
    temperaments: []
  });
  const [catDescription, setCatDescription] = useState({
    name: '',
    breed: '',
    weight: '',
    countryOfOrigin: '',
    lifespan: '',
    imageLink: ''
  })

  const commonCatNames = [
  "Luna", "Bella", "Oliver", "Leo", "Charlie", "Lucy", "Max", "Chloe", "Lily", "Milo",
  "Daisy", "Jasper", "Smokey", "Sophie", "Kitty", "Shadow", "Cleo", "Simba", "Gizmo", "Oreo",
  "Willow", "Coco", "Tiger", "Pepper", "Frankie", "Ruby", "Stella", "Misty", "Buddy", "Oscar",
  "Hazel", "Peanut", "Patches", "Ginger", "Boo", "Mittens", "Princess", "Rocky", "Callie", "Felix"
  ];

  const addToBanlist = (category, value) => {
    setBanlist(prev => ({
      ...prev,
      [category]: [...prev[category], value]
    }));
  };

  const fillOutCatDescription = (catinfo) =>{
    const randomIndex = Math.floor(Math.random() * commonCatNames.length);
    setCatDescription({
      ...catDescription,
      name: commonCatNames[randomIndex],
      breed: catinfo[0].breeds[0].name,
      weight: catinfo[0].breeds[0].weight.imperial,
      countryOfOrigin: catinfo[0].breeds[0].origin,
      lifespan: catinfo[0].breeds[0].life_span,
      imageLink: catinfo[0].url
    })
  }

  const callCatAPI = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&include_breeds=1&include_categories=1&api_key=${ACCESS_KEY}`);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("JSON INFO HERE", myJson)
    return myJson
  }

  const handleDiscoverButton = async () =>{
    console.log("discover button clicked")
    let catinfo = await callCatAPI()
    fillOutCatDescription(catinfo)
  }

  return (
    <>
      <div className='mainInfo'>
        <h1>Trippin' on Cats</h1>
        <h3>Discover Cats from your wildest Dreams!</h3>
        <CatInfo catDescription = {catDescription}/>
        {/* The onDiscover below is just a prop passed to the component,
        The actual function must be passed and used inside the Component.  */}
        <Discover onDiscover={handleDiscoverButton}/>

      </div>
    </>
  )
}

export default App
