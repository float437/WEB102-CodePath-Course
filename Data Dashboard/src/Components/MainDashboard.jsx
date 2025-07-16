import { useEffect, useState } from "react"
import "./MainDashboard.css"
import Taste from "./Taste"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const MainDashboard = (props) => {
    const [recipes, setRecipes] = useState([]); // stores full recipe objects
    const [isLoading, setIsLoading] = useState(false);

    const [foundRecipe, setFoundRecipe] = useState(null);
    const [searchInputId, setSearchInputId] = useState(""); // what the user types

    const [searchInput, setSearchInput] = useState(""); // what the user types
    const [submitIngredients, setSubmitIngredients] = useState(""); // triggers API call when submitted

//RUNS ONCE WHEN THE PAGE LOADS
useEffect(() => {
  const getFoodList = async () => {
    setIsLoading(true); // <--- start loading
    try {
      const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
      const params = { apiKey: API_KEY, number: 10 };
      const url = new URL(baseUrl);
      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url);
      const json = await response.json();

      setRecipes(json.results || []); // use empty array as fallback
    } catch (error) {
      console.error("Fetch failed:", error);
      setRecipes([]);
    } finally {
      setIsLoading(false); // <--- stop loading
    }
  };
  getFoodList();
}, []);

// RUN WHENEVER SUBMIT INGREDIENTS BUTTON IS HIT
useEffect(() => {
  const getFoodListFromIngredients = async () => {
    if (!submitIngredients) return;
    setIsLoading(true); // <--- start loading

    try {
      const baseUrl =
        "https://api.spoonacular.com/recipes/findByIngredients";
      const params = {
        apiKey: API_KEY,
        ingredients: submitIngredients,
        number: 10,
      };

      const url = new URL(baseUrl);
      url.search = new URLSearchParams(params).toString();

      const response = await fetch(url);
      const json = await response.json();

      setRecipes(json || []); // findByIngredients returns an array directly
    } catch (error) {
      console.error("Fetch failed:", error);
      setRecipes([]);
    } finally {
      setIsLoading(false); // <--- stop loading
    }
  };

  getFoodListFromIngredients();
}, [submitIngredients]); //rerun the API call when the ingredients list is changed and submitted.

const handleSubmitIngredients = (e) =>{
    e.preventDefault(); 
    setSubmitIngredients(searchInput)
}


const handleSubmitId = (e) => {
    e.preventDefault(); 
    const match = recipes.find((r) => String(r.id) === searchInput);
    if (match) {
        setFoundRecipe(match);
    } else {
        setFoundRecipe("not found");
    }
};
   

    return(
        <>
            <div className="dashboardBody">
                <h1 className="dashboardInfo">Food Dashboard </h1>

                <form onSubmit={handleSubmitId}>
                    <input
                    type="text"
                    placeholder="Enter Id of the recipie you'd like to search."
                    value={searchInputId}
                    onChange={(e) => setSearchInputId(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                {typeof foundRecipe === "object" && foundRecipe !== null ? (
                    <div className="found-recipe">
                        <h3>Recipe Found!</h3>
                        <p><strong>{foundRecipe.title}</strong> (ID: {foundRecipe.id})</p>
                        <img src={foundRecipe.image} alt={foundRecipe.title} />
                        <Taste id={foundRecipe.id} />
                    </div>
                ) : foundRecipe === "not found" ? (
                    <p>Recipe ID not found.</p>
                ) : null}

                <form onSubmit={handleSubmitIngredients}>
                    <input
                    type="text"
                    placeholder="Enter ingredients (comma-separated)"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                

                {isLoading ? (
                    <p>Loading...</p>
                    ) : recipes.length > 0 ? (
                    <ul>
                        {recipes.map((recipe) => (
                        <li className="main-list" key={recipe.id}>
                            <strong>{recipe.title || recipe.name}</strong> (ID: {recipe.id})
                            <Taste id={recipe.id}/>
                        </li>
                        ))}
                    </ul>
                    ) : (
                    <p>No recipes found.</p>
                )}

            </div>
            
        </>
    )
}
    
export default MainDashboard
