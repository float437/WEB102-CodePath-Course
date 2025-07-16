import { useEffect, useState } from "react"
import "./Summary.css"
const API_KEY = import.meta.env.VITE_APP_API_KEY

const Summary = (props) => {
    const [recipes, setRecipes] = useState([]); // stores full recipe objects
    const [isLoading, setIsLoading] = useState(false);

    //Get Total Number of Recipes
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

    //Get Higheset Protein Meal
    useEffect(() => {
      const getHighestProteinRecipe = async () => {
        setIsLoading(true); // <--- start loading
        try {
          const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
          const params = { apiKey: API_KEY,minProtein: 50, number: 1 };
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
      getHighestProteinRecipe();
      console.log(recipes)
    }, []);


    return(
        <>
            <div className="SummaryBody">
                <h1 >Food Summary</h1>
                <div className="SummaryCardContainer">
                    <div className="cardBody">
                        <h2>Total Number of Recipes</h2>
                        <br></br>
                        {isLoading ? (
                                        <p>Loading...</p>
                                        ) : recipes.length > 0 ? (
                                        <h2>
                                            {recipes.length}
                                        </h2>
                                        ) : (
                                        <p>No recipes found.</p>
                                    )}
                    </div>
                    <div className="cardBody">
                        <h2>Recipe of the Day</h2>
                        <br></br>
                        {isLoading ? (
                                        <p>Loading...</p>
                                        ) : recipes.length > 0 ? (
                                        <h2>
                                            {recipes[Math.floor(Math.random() * recipes.length)].title}
                                        </h2>
                                        ) : (
                                        <p>No recipes found.</p>
                                    )}
                    </div>
                    <div className="cardBody">
                        <h2>Most Protein Recipe</h2>
                        <br></br>
                        {isLoading ? (
                                        <p>Loading...</p>
                                        ) : recipes.length > 0 ? (
                                        <ul>
                                            {recipes.title}
                                        </ul>
                                        ) : (
                                        <p>No recipes found.</p>
                                    )}
                    </div>
                </div>
                
                            
            </div>
            
        </>
    )
}
    
export default Summary
