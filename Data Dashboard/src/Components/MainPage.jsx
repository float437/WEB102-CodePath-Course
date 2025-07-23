import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router'
import MainDashboard from './MainDashboard'
import Summary from './Summary';

const MainPage = ({isLoading, recipes, getFoodListFromIngredients, getFoodListFromId,resetFoodList,nutritionDataForCharts}) => {
    return(
        <>
                <div className='flexMainContainer'>
                <Summary isLoading = {isLoading}/>
                <MainDashboard isLoading = {isLoading} recipes = {recipes} getFoodListFromIngredients={getFoodListFromIngredients} getFoodListFromId={getFoodListFromId} resetFoodList={resetFoodList} nutritionDataForCharts={nutritionDataForCharts}/>
                </div>
        </>
    )
}

export default MainPage;
