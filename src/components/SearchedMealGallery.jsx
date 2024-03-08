import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from './Spinner';


const SearchMeal = async (searchedMeal) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`);
  const data = await response.json();
  return data.meals;
};

function SearchedMealGallery({ searchedMeal,onBack }) {
  const { data: mealData, status: mealStatus } = useQuery(['meal', searchedMeal], () => SearchMeal(searchedMeal));

 

  return (
    <div>
      <section className='md:w-[80%] m-auto mt-10 w-[90%]'>
    
        <div className='mb-3 cursor-pointer' onClick={onBack}>
            <i className="text-2xl fa-solid fa-arrow-left text-ash"></i>
        </div>
        
        {mealStatus === 'loading' && <Spinner/>}

       {mealData && mealData.length > 0 && mealStatus === 'success' &&   <ul className='grid gap-4 grid2'>
           {mealData.map((meal) => 
              (  <li className='px-2 pt-2 border-2 border-primary max-w-[250px]' key={meal.idMeal}>
                   <Link to={`${meal.idMeal}`}>
               
                    <img src={meal.strMealThumb} loading="lazy" alt="" className='' />
                    <p className='py-3 overflow-hidden text-center text-ash text-nowrap'>{meal.strMeal}</p>

                    </Link>   
                </li>
            )
            )}
           </ul>}   
           { mealData === null && <div className='text-center'>
                <img src="/images/notfound.jpg" alt="" className='w-[40%] inline-block'/>
                <p className='text-primary text-4xl text-center'>{searchedMeal} is not available on our Menu</p>
           </div> }

        </section>
    </div>
  );
}

export default SearchedMealGallery;
