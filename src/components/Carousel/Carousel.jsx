import {React,useState,useEffect} from 'react'
import './Carousel.css'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import {slides} from '../data/carouselData.json'

function Carousel() {
  // console.log(slides);
  const[slide,setSlide]=useState(0);

  const nextSlide=()=>{
    setSlide(slide===slides.length-1?0:s=>s+1);
  }

  const prevSlide=()=>{
    setSlide(slide===0?slides.length-1:s=>s-1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className='carousel'>
      <div className='slides-container'>
      <BsArrowLeftCircleFill onClick={prevSlide} className='arrow arrow-left'/>
        {slides.map((item,idx)=>{
          return <img src={item. src} alt={item.alt} key={idx} className={slide===idx?"slides":"slide slide-hidden"}/>
        })}
      </div>
      <BsArrowRightCircleFill onClick={nextSlide} className='arrow arrow-right'/>
      <span className='indicators'>
        {slides.map((_,idx)=>{
          return <button key={idx} onClick={()=>{setSlide(idx)}} className={slide===idx?'indicator':'indicator indicator-inactive'}></button>
        })}
      </span>
    </div>
  )
}

export default Carousel
