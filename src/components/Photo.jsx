import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';

 const img = [
  {
    id:1 ,
    src: "/images/Mask Group (5).jpg"
},  {
  id:2 ,
  src: "/images/Mask Group (7).jpg"
},  {
  id:3 ,
  src: "/images/Mask Group (6).jpg"
},  {
  id: 4,
  src: "/images/Mask Group (7).jpg"
},  {
  id:5 ,
  src: "/images/Mask Group (8).jpg"
},  {
  id:6 ,
  src: "/images/Mask Group (8).jpg"
}

 ]

export default function Photo() {
  return (
    <>
        <Swiper
        slidesPerView={2}
        spaceBetween={2}
        freeMode={true}
        modules={[FreeMode]}
        className="mt-5 mySwiper cursor-grab"
      >
     
     {
        img.map((image) => 
         ( <SwiperSlide  key={image.id}>
          <div className='relative object-cover w-full h-full border-2 border-primary-b'>
          <img src={image.src} alt="" className='w-[400px] h-[300px]' />
          <span className='bg-[#0006] w-full h-full absolute top-0 right-0 opacity-0 hover:opacity-100 flex justify-center items-center'>
            <img src="/images/u_instagram.svg" className='' alt="" />
          </span>
          </div>
        </SwiperSlide>)
        )
      }
   
      </Swiper>
    </>

  )
}






















// export default function Photo() {
//     const [width,setWidth]= useState(0);
//     const carousel = useRef()
//     useEffect(()=> {
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
//     },[])
//   return (
// <motion.div ref={carousel} className='overflow-hidden cursor-grab'>
//     <motion.div drag='x'
//     dragConstraints={{right:0 , left: -width}} className='flex my-5 border-2 '>
    
//     {img.map((image) => (
//    <motion.div key={image.id} >
//      <motion.div className='w-[120px] h-[100%] mx-2'>
//      <img src= {image.src}  className='w-full h-[100%] pointer-events-none ' alt="" />
//      </motion.div>
//    </motion.div>
//     ))}
    
  
// </motion.div>
// </motion.div>
//   )
// }
