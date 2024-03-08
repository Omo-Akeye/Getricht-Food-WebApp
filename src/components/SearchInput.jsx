import React, { useState } from 'react';

function SearchInput({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  function handleSearch() {
    onSearch(searchInput);
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <article className='w-[80%] m-auto md:mt-16'>

<div className='flex items-center justify-center'>
      <input
        type="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className='w-[80%] outline-none px-4 py-3 border-2 text-xl'
      />
      <button
        onClick={handleSearch}
        className='bg-[#DCCA87] border-2 text-[#0C0B08] text-xl px-7 py-3  hover:bg-[#0C0B08] hover:text-[#DCCA87]  border-[#DCCA87]'
      >
        Search
      </button>
    </div>
    
   <p className='font-sans text-ash text-center mt-5'>Search Meals or Select Categories From Below</p>
</article>
    
  );
}

export default SearchInput;
