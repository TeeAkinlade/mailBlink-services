'use client'

import { useSwiper } from 'swiper/react';
import { BsArrowLeft, BsArrowRight } from  'react-icons/bs'

export const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-5">
        <BsArrowLeft onClick={() => swiper.slidePrev()} 
            className='cursor-pointer text-2xl text-navyBlue'
        />
        <BsArrowRight onClick={() => swiper.slideNext()} 
            className='cursor-pointer text-2xl text-navyBlue'
        />
    </div>
  );
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <BsArrowLeft className="arrows" style={{color:"white"}}/>
    </div>
  )
}
export const SampleNextArrow= (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <BsArrowRight className="arrows" style={{color:"white"}}/>
    </div>
  )
  }