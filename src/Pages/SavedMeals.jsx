import React from 'react'
import Nav from '../components/Nav'
import Footer1 from '../components/Footer1'

export default function SavedMeals({savedMeals,removeMeal}) {
  const handleRemove = (index) => {
    removeMeal(index);
  };
  
  console.log(savedMeals);
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav/>

      <section className='w-[80%] m-auto'>
      <h1 className='font-sans text-3xl font-bold text-center text-ash mt-16'>Saved Meals</h1>
       {savedMeals.length == 0 && <p className='mt-8 font-sans text-4xl text-center text-white'>You have no meal saved yet</p>}
       {savedMeals.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-8 mb-12 justify-items-center">
          {savedMeals.map((meal, index) => (
            <div key={index} className="flex items-center justify-between p-1 border-2 border-primary">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[30%]" />
              <p className="font-sans text-lg text-center text-ash">{meal.strMeal}</p>
              <button className="px-4 py-2 mt-2 text-white bg-red-500 rounded" onClick={() => handleRemove(index)}><i class="fa-solid fa-trash-can"></i></button>
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
