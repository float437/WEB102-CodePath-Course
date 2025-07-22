import { useEffect, useState, PureComponent } from "react"
import "./MainDashboard.css"
import Taste from "./Taste"
import LineChartComponent from "./LineChartComponent";
import { BarChart, Bar, Rectangle, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const API_KEY = import.meta.env.VITE_APP_API_KEY

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const foodConsumptionData = [
  {
    year: '2000',
    meatConsumption: 50, // in kg per capita
    grainConsumption: 150, // in kg per capita
    vegetableConsumption: 100, // in kg per capita
  },
  {
    year: '2005',
    meatConsumption: 55,
    grainConsumption: 145,
    vegetableConsumption: 110,
  },
  {
    year: '2010',
    meatConsumption: 60,
    grainConsumption: 140,
    vegetableConsumption: 120,
  },
  {
    year: '2015',
    meatConsumption: 68,
    grainConsumption: 135,
    vegetableConsumption: 135,
  },
  {
    year: '2020',
    meatConsumption: 75,
    grainConsumption: 130,
    vegetableConsumption: 150,
  },
  {
    year: '2025',
    meatConsumption: 82,
    grainConsumption: 125,
    vegetableConsumption: 165,
  },
  {
    year: '2030',
    meatConsumption: 90,
    grainConsumption: 120,
    vegetableConsumption: 180,
  },
];

const MainDashboard = (props) => {
    const [searchInputId, setSearchInputId] = useState(""); // what the user types in id inputbox
    const [searchInput, setSearchInput] = useState(""); // what the user types in recipe inputbox


const handleSubmitIngredients = (e) =>{
    e.preventDefault(); 
    if(searchInput){
      props.getFoodListFromIngredients(searchInput)
    }else{
      // recall the original api to refill with basic info
      props.resetFoodList()
    }
    
}

const handleSubmitId = (e) =>{
    e.preventDefault(); 
    props.getFoodListFromId(searchInputId)
}
   

    return(
        <>
            <div className="dashboardBody">
                <h1 className="dashboardInfo">Food Dashboard </h1>

              <div className="dashboard-maininfo">
                <form onSubmit={handleSubmitId}>
                                  <input
                                  type="text"
                                  placeholder="Enter Id of the recipie you'd like to search."
                                  value={searchInputId}
                                  onChange={(e) => setSearchInputId(e.target.value)}
                                  />
                                  <button type="submit">Search</button>
                              </form>


                              <form onSubmit={handleSubmitIngredients}>
                                  <input
                                  type="text"
                                  placeholder="Enter ingredients (comma-separated)"
                                  value={searchInput}
                                  onChange={(e) => setSearchInput(e.target.value)}
                                  />
                                  <button type="submit">Search</button>
                              </form>

                              {props.isLoading ? (
                                  <p>Loading...</p>
                                  ) : props.recipes.length > 0 ? (
                                  <ul>
                                      {props.recipes.map((recipe) => (
                                      <li className="main-list" key={recipe.id}>
                                          <strong>{recipe.title || recipe.name}</strong> (ID: {recipe.id})
                                          {/* <Taste id={recipe.id}/> */}
                                      </li>
                                      ))}
                                  </ul>
                                  ) : (
                                  <p>No recipes found.</p>
                              )}
            </div>
            <div className="dashboard-graphs">
              <div className="BarChart">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data1}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="LineChart">
                    <LineChartComponent data={foodConsumptionData}/>
              </div>
            </div>
                

            </div>
            
        </>
    )
}
    
export default MainDashboard
