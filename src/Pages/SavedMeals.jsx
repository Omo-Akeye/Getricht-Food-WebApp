import React from 'react'

import Footer1 from '../components/Footer1'

export default function SavedMeals({savedMeals,removeMeal}) {
  const handleRemove = (index) => {
    removeMeal(index);
  };
  
  console.log(savedMeals);
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='md:w-[80%] m-auto w-[90%]'>
      <h1 className='font-sans text-3xl font-bold text-center text-ash md:mt-16'>Saved Meals</h1>
       {savedMeals.length == 0 && <p className='mt-8 font-sans text-4xl text-center text-white max-md:mb-24'>You have no meal saved yet</p>}
       {savedMeals.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4 mt-8 mb-12 justify-items-center ">
          {savedMeals.map((meal, index) => (
            <div key={index} className="flex items-center justify-between p-1 border-2 border-primary">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[30%]" />
              <p className="font-sans text-lg text-center text-ash">{meal.strMeal}</p>
              <button className="px-4 py-2 mt-2 text-red-700" onClick={() => handleRemove(index)}><i class="fa-solid fa-xmark text-2xl"></i></button>
            </div>
          ))}
        </div>
      )}
      </section>
      <div className='mt-auto'>
      <Footer1/>
      </div>
      </div>
  )
}
