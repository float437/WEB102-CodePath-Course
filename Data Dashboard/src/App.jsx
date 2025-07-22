import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_APP_API_KEY
import './App.css'
import Sidebar from './Components/Sidebar'
import Summary from './Components/Summary'
import MainDashboard from './Components/MainDashboard'


function App() {
  const [recipes, setRecipes] = useState([]); // stores full recipe objects
  const [nutritionDataForCharts, setNutritionDataForCharts] = useState([]);
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
      // nutritionGraphHelper(json);
    } catch (error) {
      console.error("Fetch failed:", error);
      setRecipes([]);
    } finally {
      setIsLoading(false); // <--- stop loading
    }
};

// const nutritionGraphHelper = async(recipes) =>{
//   if (!recipes || recipes.length === 0) {
//     console.warn("No recipes provided to nutritionGraphHelper.");
//     return;
//   }

//   const nutritionPromises = recipes.map(recipe => {
//     // Ensure each recipe has an 'id' property
//     if (recipe && recipe.id) {
//       return getNutritionInfoFromId(recipe.id);
//     } else {
//       console.warn("Recipe missing ID:", recipe);
//       return null; // Or handle this error appropriately
//     }
//   });

//   try {
//     const nutritionResults = await Promise.all(nutritionPromises);

//     const processedNutritionData = nutritionResults.map(data => ({
//       id: data.id, // Assuming the nutrition API returns the ID
//       carbs: data.carbohydrates, // Adjust according to your API's response structure
//       protein: data.protein
//     }));

//     // Update your state variable with the processed nutrition data
//     setNutritionData(processedNutritionData);

//   } catch (error) {
//     console.error("Error fetching nutrition information:", error);
//     // You might want to set an error state here as well
//   }
  
// }

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

  
  useEffect(() => {
    const updateNutritionForCharts = async () => {
      console.log("recipes state updated: ")
      if (!recipes || recipes.length === 0) {
        setNutritionDataForCharts([]);
        setIsLoading(false); // Ensure loading is off if no recipes
        return;
      }

      setIsLoading(true); // Start loading for nutrition data

      const nutritionPromises = recipes.map(recipe => {
        if (recipe && recipe.id) {
          return getNutritionInfoFromId(recipe.id);
        } else {
          console.warn("Recipe missing ID, skipping:", recipe);
          // Return a structured null-like object so Promise.all doesn't fail
          return Promise.resolve({ id: recipe?.id, error: "Missing recipe ID" });
        }
      });

      try {
        const results = await Promise.all(nutritionPromises);

        // Filter out results that truly failed (e.g., network error or API error)
        // You might want to display errors for specific recipes later
        const validNutritionResults = results.filter(item => item && !item.error && item.data);

        // Process the valid nutrition results
        const processedChartData = validNutritionResults.map(item => {
          // item.data now holds the JSON from the Spoonacular API
          const nutrition = item.data; // This is the entire API response object

          // Extract nutrients from the 'nutrients' array within the API response
          const getNutrientAmount = (nutrientName) => {
            const nutrient = nutrition.nutrients.find(n => n.name === nutrientName);
            return nutrient ? nutrient.amount : 0;
          };
          console.log("item id: ", item.id)
          console.log("protein: ", item.data.nutrients[10].amount)
          console.log("calories: ", item.data.nutrients[0].amount)

          return {
            id: item.id, // This is the original recipe ID
            protein: item.data.nutrients[10].amount,     // From the nutrients array
            calories: item.data.nutrients[0].amount    // From the nutrients array
          };
        });

        setNutritionDataForCharts(processedChartData);

      } catch (error) {
        console.error("Error in Promise.all or processing nutrition data:", error);
        setNutritionDataForCharts([]); // Clear data on a major error
      } finally {
        setIsLoading(false); // Stop loading for nutrition data
      }
    };

    updateNutritionForCharts();

  }, [recipes]); // Rerun when 'recipes' changes


  const getNutritionInfoFromId = async (id) =>{
    if(!recipes) return;
      try {
        console.log("inside getNutritionInfoFromId function")
        const baseUrl = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`;
        const params = { apiKey: API_KEY };
        const url = new URL(baseUrl);
        url.search = new URLSearchParams(params).toString();
  
        const response = await fetch(url);
        const json = await response.json();
        
        // TODO : will this map the id to the nutrition info?
        // setNutritionDictionary({...nutritionDictionary, id : json.nutrients});
        console.log("setting json: ", json)
        return {id : id, data: json};
      } catch (error) {
        console.error(`Fetch failed for ID ${id}:`, error);
        // setNutritionDictionary([]);
        return null;
      }
  }

  return (
    <>
      <div className='flexSidebarContainer'>
        <Sidebar/>
        <div className='flexMainContainer'>
          {/* <Summary isLoading = {isLoading}/> */}
          <MainDashboard isLoading = {isLoading} recipes = {recipes} getFoodListFromIngredients={getFoodListFromIngredients} getFoodListFromId={getFoodListFromId} resetFoodList={resetFoodList} nutritionDataForCharts={nutritionDataForCharts}/>
          </div>
        
      </div>
      
    </>
  )
}

export default App
