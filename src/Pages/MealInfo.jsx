
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import Footer1 from '../components/Footer1';
import Spinner from '../components/Spinner';
import Button from '../components/Button';





const   FetchMealInfo = async (meal) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
  const data = await response.json();
  return data.meals[0];
};
export default function MealInfo({ saveMeal }) {
  const handleSaveMeal = () => {
    if (data) {
      saveMeal({ strMeal: data.strMeal, strMealThumb: data.strMealThumb });
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1) }; 
  
  const { idMeal } = useParams();
  const { data , status } = useQuery(['MealInfo', idMeal], () => FetchMealInfo(idMeal));
  
  return (
    
      <section className='flex flex-col min-h-screen'>
        <div className='absolute cursor-pointer md:left-28 md:top-28 top-[10%] left-[5%]' onClick={goBack}>
            <i className="text-2xl fa-solid fa-arrow-left text-ash"></i>
        </div>
         
        <div className='text-ash md:w-[80%] m-auto  md:mt-10 w-[90%]'>
        {status === 'loading' && <Spinner/>}
        {status === 'success' && (
          <article>
            
            <h1 className='mb-8 text-3xl text-center'>MEAL DETAILS</h1>
         <section className='grid md:grid-cols-2 gap-5 mt-5'>
          
         <div className='w-[80%] text-center max-md:m-auto'>
          <img src={data.strMealThumb} alt="" className='w-full m-auto'/>
          </div>
          
          <div className='relative block text-left'>
            <h1 className='text-3xl text-primary'>{data.strMeal}</h1>
            <p className='md:my-8 font-sans my-4'>Category : {data.strCategory}</p>
            <div className='inline-block px-2 text-xl font-bold text-black rounded-full bg-primary'>{data.strTags}</div>
            {data.strTags && (
                    <div>
                      {data.strTags.split(',').map((tag, index) => (
                        <button  key={index} className='px-5 py-2 mt-5 mr-2 font-bold text-black rounded-full bg-primary'>
                          {tag.trim()}
                        </button>
                      ))}
                    </div>
                  )}
            <div className='md:absolute md:bottom-0 max-md:mt-4' onClick={handleSaveMeal}><Button>Save Meal</Button></div>
          </div>
         </section>
          
          <div className='mt-8 mb-16'>
            <h2 className='mb-8 text-3xl text-center underline capitalize'>Instructions</h2>
            <p className='font-sans'>{data.strInstructions}</p>
          </div>


          <div className='table-container'>
    <table className='table w-full mb-16 font-sans'>
      <thead>
        <tr>
          <th >INGREDIENT</th>
          <th>MEASURE</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((key, index) => {
          if (key.startsWith("strIngredient") && data[key]) {
            const ingredientNumber = key.split("strIngredient")[1];
            const measureKey = `strMeasure${ingredientNumber}`;
            return (
              <tr key={index} className='text-center border-[1px] border-ash'>
                <td >{data[key]}</td>
                <td>{data[measureKey]}</td>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
    </div>
        </article>

        ) }

            {status === 'error' && <h1>Unable to fetch</h1>}
          

        </div>
        <div className='mt-auto'>
        <Footer1/>
        </div>
       
      </section>
  
  )
}
