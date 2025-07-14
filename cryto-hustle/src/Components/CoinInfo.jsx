// new component to keep track of what coin we are looking at, its price, and logo icon.
import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const CoinInfo = ({image, name, symbol}) => {
const [price, setPrice] = useState(null)

useEffect (() => {
    const getCoinPrice = async () => {
        const baseUrl = 'https://min-api.cryptocompare.com/data/price';
        const params = {"api_key" : API_KEY, "fsym" : symbol, "tsym": "USD"}
        const url = new URL(baseUrl);
        url.search = new URLSearchParams(params).toString();

        const options = {
            method: 'GET',
            headers:  {"Content-type":"application/json; charset=UTF-8"},
        };

        const response = await fetch(
            url,options)
        const json = await response.json()
        console.log(json)
        setPrice(json)
    }

    getCoinPrice().catch(console.error)
},[symbol])


// instead of useEffect() running on every render, it will now run whenever the symbol we pass in changes.
//  So every time we give a new coin symbol to get the info for, the useEffect() hook will run.

    return(
        <>
            <div>
                {price ? ( // rendering only if API call actually returned us data
                <li className="main-list" key = {symbol}>
                    <img className="icons" src={`https://www.cryptocompare.com${image}`} alt={`Small icon for ${name} crypto coin`}></img>
                    {name}
                    <span></span>
                    {price && price.USD ? ` $${price.USD} USD` : null}
                </li>
                ) : null}
            </div>
        </>
    )
}
    
export default CoinInfo
