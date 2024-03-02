import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Spinner from './Spinner'
import SearchInput from './SearchInput';

const fetchMealCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
   return data.categories;
}


export default function MealsContainer({curCategory,setCurCategory}) {



  function handleCategory(e) {
    setCurCategory(e.target.textContent);
  }
  
  const { data : categoryData, status : categoryStatus} = useQuery('categories', fetchMealCategories);
  

  
  return (
    <div>
        <section>
 
        <div className='font-sans w-[80%] m-auto mt-10'>
          {categoryStatus === 'loading' && <Spinner/>}

         {categoryStatus === 'success' && <ul className='grid gap-4 grid1 place-content-center '>
          {
            categoryData.map((categories)=> 
              (
                <li key={categories.idCategory} onClick={handleCategory} 
                className={`bg-[#DCCA87] text-[#0C0B08] px-2 py-3 text-center font-bold cursor-pointer  ${curCategory === categories.strCategory ? 'bg-[#FFC000]' : ''}`}>
                  {categories.strCategory}</li>
              )
            
              )
          }   
          </ul>}

          { categoryStatus === 'error' &&  <p>Error: NotFound</p> }
        </div>
        </section>
    </div>
  )
}
