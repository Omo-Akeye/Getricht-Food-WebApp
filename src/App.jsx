import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Meals from "./Pages/Meals"
import SavedMeals from "./Pages/SavedMeals"
import MealInfo from "./components/MealInfo"
import { useMemo, useState } from "react"


function App() {
 
  const [savedMeals, setSavedMeals] = useState([]);
  const saveMeal = (meal) => {
 
    const existingMeal = savedMeals.find(savedMeal => savedMeal.strMeal === meal.strMeal);
    if (!existingMeal) {
      setSavedMeals([...savedMeals, meal]);
    } else {
      alert(`Meal '${meal.strMeal}' is already saved.`);
    } }
    const removeMeal = (index) => {
      const updatedMeals = [...savedMeals];
      updatedMeals.splice(index, 1);
      setSavedMeals(updatedMeals);
    };
  const router = useMemo(()=> {
    return createBrowserRouter([
   
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/meals',
        element: <Meals/>
      },
      {
         path:'/meals/:idMeal',
         element:<MealInfo saveMeal={saveMeal}/>
      },
      {
        path: '/savedMeals',
        element: <SavedMeals savedMeals={savedMeals} removeMeal={removeMeal}/>
      }
  
  ])
  }) 
  return (
   <RouterProvider router={router}/>
  )
}

export default App
