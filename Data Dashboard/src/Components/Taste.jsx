import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const Taste = ({id}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [tasteData, setTasteData] = useState(null);
    const [maxFlavor, setMaxFlavor] = useState(null);

useEffect(() => {
  const getTasteFromId = async () => {
    if (!id) return;
    setIsLoading(true); 

    try {
      const baseUrl =
        `https://api.spoonacular.com/recipes/${id}/tasteWidget.json`;
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
}, [id]); //rerun the API call only when the Id is changed?.   
    
    if (isLoading) return <p>Loading taste data...</p>;
    if (!tasteData) return <p>No taste data available.</p>;

    return(
        <>
             <div>
                <p><strong>Taste Profile for Id {id}</strong></p>
                <p>
                    <strong>Dominant Flavor:</strong> {maxFlavor.key}
                </p>
                <br/>
            </div>
        </>
    )
}
    
export default Taste
