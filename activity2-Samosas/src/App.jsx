import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiplierCard from './Components/MultiplierCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Samosas Generator</h1>
      <div className="card">

        <button class="countDisplay" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div class="MultiplierOptions">
          <MultiplierCard name="Double Stuffed" multiplier="2x Samosas" cost="10 Samosas" onClick={() => setCount((count) => count + 1)}/>
          <MultiplierCard name="Party Pack" multiplier="5x Samosas" cost="100 Samosas"/>
          <MultiplierCard name="Full Feast!" multiplier="10x Samosas" cost="1000 Samosas"/>
        </div>
      </div>
    </>
  )
}

export default App
