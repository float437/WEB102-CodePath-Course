import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const Taste = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [tasteData, setTasteData] = useState(null);
    const [maxFlavor, setMaxFlavor] = useState(null);

useEffect(() => {
  const getTasteFromId = async () => {
    if (!props.id) return;
    setIsLoading(true); 

    //TODO REMOVE API CALL FROM TASTE AND FEED WHATEVER IT NEEDS FROM EITHER APP OR MAIN DASHBOARD AS A PROP.

    try {
      // const baseUrl =
      //   `https://api.spoonacular.com/recipes/${props.id}/tasteWidget.json`;
      const params = {
        apiKey: API_KEY
      };

      const url = new URL(baseUrl);
      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url);
      const json = await response.json();

      setTasteData(json); 

      const entries = Object.entries(json);
        const max = entries.reduce(
          (acc, [key, value]) => (value > acc.value ? { key, value } : acc),
          { key: null, value: -Infinity }
        );
        setMaxFlavor(max);
    } catch (error) {
      console.error("Fetch Taste Data failed:", error);
      setTasteData(null);
      setMaxFlavor(null);
    } finally {
      setIsLoading(false); // <--- stop loading
    }
  };

  getTasteFromId();
}, [props.id]); //rerun the API call only when the Id is changed?.   
    
    if (isLoading) return <p>Loading taste data...</p>;
    if (!tasteData) return <p>No taste data available.</p>;

    return(
        <>
             <div>
                <p><strong>{props.id}'s Taste Profile / Dominant Flavor: {maxFlavor.key}</strong></p>
                <br/>
            </div>
        </>
    )
}
    
export default Taste
