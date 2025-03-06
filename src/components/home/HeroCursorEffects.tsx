
import { useEffect, useRef } from "react";

const HeroCursorEffects = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailElements: HTMLDivElement[] = [];
  
  useEffect(() => {
    // Create custom cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);
    
    // Create mouse trail elements
    for (let i = 0; i < 10; i++) {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.opacity = '0';
      document.body.appendChild(trail);
      trailElements.push(trail);
    }
    
    // Add custom cursor behavior
    const handleMouseMoveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
      
      // Add delay to outline for smooth effect
      setTimeout(() => {
        cursorOutline.style.left = `${clientX}px`;
        cursorOutline.style.top = `${clientY}px`;
      }, 50);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.interactive-element')) {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.opacity = '0.5';
      } else {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.opacity = '1';
      }
      
      // Update cursor Ref position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      
      // Update mouse trail
      if (trailElements.length > 0) {
        const trail = trailElements.pop();
        if (trail) {
          trail.style.left = `${clientX}px`;
          trail.style.top = `${clientY}px`;
          trail.style.opacity = '0.8';
          
          setTimeout(() => {
            trail.style.opacity = '0';
            trailElements.unshift(trail);
          }, 100);
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMoveCursor);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveCursor);
      
      // Clean up cursor and trail elements
      if (cursorDot) document.body.removeChild(cursorDot);
      if (cursorOutline) document.body.removeChild(cursorOutline);
      trailElements.forEach(trail => {
        if (trail) document.body.removeChild(trail);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="fixed pointer-events-none z-50 font-medium text-white text-center text-xs"></div>
  );
};

export default HeroCursorEffects;
