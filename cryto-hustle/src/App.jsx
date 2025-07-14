import { useState, useEffect } from 'react';
import viteLogo from '/vite.svg'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import CoinInfo from "./Components/CoinInfo"
import './App.css'

function App() {
  const [list, setList] = useState(null)

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const baseUrl = 'https://min-api.cryptocompare.com/data/all/coinlist';
      const params = {"api_key" : API_KEY}
      const url = new URL(baseUrl);
      url.search = new URLSearchParams(params).toString();

      const options = {
          method: 'GET',
          headers:  {"Content-type":"application/json; charset=UTF-8"},
      };

      const response = await fetch(
        url,options)
      const json = await response.json()

      setList(json)
    }

    fetchAllCoinData().catch(console.error)
  },[])


  return (
    <>
      <div className='whole-page'>
        <h1>My Crypto List</h1>
          <ul>
            {list &&
              Object.entries(list.Data)
                .filter(([_, coinData]) =>
                  coinData.IsTrading &&
                  coinData.Algorithm !== "N/A" &&
                  coinData.ProofType !== "N/A"
                )
                .map(([coin, coinData]) => (
                  <CoinInfo
                    image={list.Data[coin].ImageUrl}
                    name={list.Data[coin].FullName}
                    symbol={list.Data[coin].Symbol}
                  />
                ))}
          </ul>
        
      </div>
    </>
  )
}

export default App
