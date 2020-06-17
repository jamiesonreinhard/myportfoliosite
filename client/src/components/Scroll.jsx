import React, {useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollNext = () => {
    if (!showScroll){
      setTimeout(function() {
        setShowScroll(true)
      }, 500); 
    } 
  };

  const scrollNext = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    setTimeout(function() {
      setShowScroll(false);
      
    }, 100);
    
  };

  window.addEventListener('scroll', checkScrollNext)

  return (
        <IoIosArrowDown className="scroll-icon" 
        onClick={scrollNext} 
        style={{height: 60, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;
