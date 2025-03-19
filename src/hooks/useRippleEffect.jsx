import { useEffect } from 'react';

const useRippleEffect = (selector = '.ripple-effect') => {
  useEffect(() => {
    const createRipple = (event) => {
      const element = event.currentTarget;
      
      // Create ripple element
      const circle = document.createElement('span');
      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;
      
      // Position the ripple based on click location
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - element.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - element.getBoundingClientRect().top - radius}px`;
      circle.classList.add('ripple');
      
      // Remove existing ripple
      const ripple = element.querySelector('.ripple');
      if (ripple) {
        ripple.remove();
      }
      
      // Add new ripple
      element.appendChild(circle);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        if (circle) {
          circle.remove();
        }
      }, 600); // Match the animation duration
    };
    
    // Add event listeners to all matching elements
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.addEventListener('click', createRipple);
    });
    
    // Clean up event listeners on unmount
    return () => {
      elements.forEach(element => {
        element.removeEventListener('click', createRipple);
      });
    };
  }, [selector]);
};

export default useRippleEffect;