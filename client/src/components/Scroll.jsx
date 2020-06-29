import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollNext = () => {
    
    
      if (window.pageYOffset > 400){
      
        setShowScroll(true)
      
      
    } else {
      setShowScroll(false)
    }
  
    
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('.scroll-icon').classList.add('fade-out');
    setTimeout(function() {
      document.querySelector('.scroll-icon').classList.remove('fade-out');
      checkScrollNext();
    }, 1000);
    
    
    
  };

  window.addEventListener('scroll', checkScrollNext)

  return (
        <FaArrowCircleUp className="scroll-icon" 
        onClick={scrollTop} 
        style={{height: 50, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;
