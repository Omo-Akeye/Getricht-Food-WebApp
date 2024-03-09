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
        breakpoints={{
          420 : {
            slidesPerView :2.6,
            spaceBetween: 5
          },
          540 : {
            slidesPerView :3,
            spaceBetween: 9
          },
          640 : {
            slidesPerView :3.5,
            spaceBetween: 9
          },
          1000 : {
            slidesPerView :4,
            spaceBetween: 9
          }
        }}
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