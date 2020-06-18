import React, {useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollNext = () => {
    setTimeout(function() {
      if (window.pageYOffset > 400){
      
        setShowScroll(true)
      
      
    } else {
      setShowScroll(false)
    }
    }, 1000);
    
  };

  const scrollNext = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    setShowScroll(false)
    
    
  };

  window.addEventListener('scroll', checkScrollNext)

  return (
        <IoIosArrowUp className="scroll-icon" 
        onClick={scrollNext} 
        style={{height: 60, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;
