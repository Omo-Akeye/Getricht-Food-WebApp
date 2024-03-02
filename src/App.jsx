import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Meals from "./Pages/Meals"
import SavedMeals from "./Pages/SavedMeals"
import MealInfo from "./components/MealInfo"

const router = createBrowserRouter([
 
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
         element:<MealInfo/>
      },
      {
        path: '/savedMeals',
        element: <SavedMeals/>
      }
 
])
function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
