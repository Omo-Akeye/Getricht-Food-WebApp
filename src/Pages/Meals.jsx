import React, { useState } from 'react'
import Footer1 from '../components/Footer1'
import CategoryGallery from '../components/CategoryGallery'
import SearchInput from '../components/SearchInput'
import SearchedMealGallery from '../components/SearchedMealGallery'


export default function Meals() {
  const [curCategory,setCurCategory] = useState('Beef')
  const [searchedMeal, setSearchedMeal] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (meal) => {
    setSearchedMeal(meal);
    setSearched(true);
  };
  const handleBack = (meal) => {
    setSearchedMeal('');
    setSearched(false)
  }
  
  return (
    <div className='font-upright min-h-screen flex flex-col'>
       <div className='mb-12'>
       <SearchInput onSearch={handleSearch}/>
        {!searched && <CategoryGallery curCategory={curCategory} setCurCategory={setCurCategory}  onSearch={handleSearch} />}
        {searched && <SearchedMealGallery searchedMeal={searchedMeal} onBack={handleBack} />}
       </div>
        <div className='mt-auto'>
          <Footer1/>
        </div>
    </div>
  )
}
