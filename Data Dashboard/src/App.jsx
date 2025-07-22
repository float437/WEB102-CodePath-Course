import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import './App.css'
import Sidebar from './Components/Sidebar'
import Summary from './Components/Summary'
import MainDashboard from './Components/MainDashboard'


function App() {
  const [recipes, setRecipes] = useState([]); // stores full recipe objects
  //TODO: PUT IN SUMMARY DASHBOARD for total number of recipes in the API
  const [totalNumberOfRecipesReturned, setTotalNumberOfRecipesReturned] = useState(0)
  const [isLoading, setIsLoading] = useState(false);

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
        
        setTotalNumberOfRecipesReturned(json.totalResults)
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

const getFoodListFromIngredients = async (ingredientsListFromMainDashboard) => {
  if (!ingredientsListFromMainDashboard) return;
    setIsLoading(true); // <--- start loading

    try {
      const baseUrl =
        "https://api.spoonacular.com/recipes/findByIngredients";
      const params = {
        apiKey: API_KEY,
        ingredients: ingredientsListFromMainDashboard,
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

  const resetFoodList = async () => {
    setIsLoading(true); // <--- start loading
      try {
        const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
        const params = { apiKey: API_KEY, number: 10 };
        const url = new URL(baseUrl);
        url.search = new URLSearchParams(params).toString();
  
        const response = await fetch(url);
        const json = await response.json();
        
        setTotalNumberOfRecipesReturned(json.totalResults)
        setRecipes(json.results || []); // use empty array as fallback
      } catch (error) {
        console.error("Fetch failed:", error);
        setRecipes([]);
      } finally {
        setIsLoading(false); // <--- stop loading
      }
  };

  const getFoodListFromId = (idListFromMainDashboard) => {
  if (!idListFromMainDashboard) return;
  console.log("does this run?");
  setIsLoading(true);

  const matchedId = parseInt(idListFromMainDashboard);
  const found = recipes.find(r => r.id === matchedId);

  if (found) {
    console.log("Matched recipe:", found);
    setRecipes([found]); // Set recipes to an array with one item
  }

  setIsLoading(false);
};

  return (
    <>
      <div className='flexSidebarContainer'>
        <Sidebar/>
        <div className='flexMainContainer'>
          {/* <Summary isLoading = {isLoading}/> */}
          <MainDashboard isLoading = {isLoading} recipes = {recipes} getFoodListFromIngredients={getFoodListFromIngredients} getFoodListFromId={getFoodListFromId} resetFoodList={resetFoodList}/>
          </div>
        
      </div>
      
    </>
  )
}

export default App
