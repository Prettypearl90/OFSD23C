//Scroll to Top Button

import React, { useRef, useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const buttonRef = useRef();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 100); // Show the button when scrolled down 100px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: '1000px' }}>Scroll down...</div>
      <button ref={buttonRef} onClick={scrollToTop} style={{ display: showButton ? 'block' : 'none' }}>
        Scroll to Top
      </button>
    </div>
  );
}

