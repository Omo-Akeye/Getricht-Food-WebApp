import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from './Spinner';
import MealsContainer from './MealsContainer';



const fetchCategoryDetails = async (curCategory) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${curCategory}`);
    const data = await response.json();
    return data.meals;
  };
export default function CategoryGallery({curCategory,setCurCategory,onSearch}) {
    
    const { data: details, status } = useQuery(['categoryDetails', curCategory], () => fetchCategoryDetails(curCategory));
    

    return (
    <div>

       <MealsContainer curCategory={curCategory} setCurCategory={setCurCategory}  onSearch={onSearch}/>

        <section className='w-[80%] m-auto mt-10'>
        {status === 'loading' && <Spinner/>}

       {status === 'success' &&   <ul className='grid gap-4 grid2'>
           {details.map((meal) => 
              (  <li className='px-2 pt-2 border-2 border-primary max-w-[250px]' key={meal.idMeal}>
                   <Link to={`${meal.idMeal}`}>
               
                    <img src={meal.strMealThumb} loading="lazy" alt="" className='' />
                    <p className='py-3 overflow-hidden text-center text-ash text-nowrap'>{meal.strMeal}</p>

                    </Link>   
                </li>
            )
            )}
           </ul>}   
           { status === 'error' &&  <p>Error: {error.message}</p> }

        </section>
    </div>
  )
}





  // useEffect(()=> {
    //     async function getDetails() {
    //         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${curCategory}`)
    //         const data = await res.json()
    //         setDetails(data.meals)
    //         // console.log(data.meals);
    //     }
    //     getDetails()
    // },[curCategory])