
import React, { useRef, useEffect } from "react";

interface AutoSliderProps {
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
}

const AutoSlider = ({
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  className = "",
  children,
}: AutoSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const pausedRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  // Clone children for infinite effect
  const content = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return [...childrenArray, ...childrenArray];
  }, [children]);

  // Animation loop
  const animate = () => {
    if (!sliderRef.current || pausedRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const scrollAmount = direction === "left" ? 1 : -1;
    sliderRef.current.scrollLeft += scrollAmount * (speed / 30);

    // Reset scroll when reaching the end of the first set of content
    if (sliderRef.current.scrollLeft >= innerRef.current?.clientWidth! / 2) {
      sliderRef.current.scrollLeft = 0;
    } else if (sliderRef.current.scrollLeft <= 0 && direction === "right") {
      sliderRef.current.scrollLeft = innerRef.current?.clientWidth! / 2;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  // Initialize animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, direction]);

  // Mouse handlers for pause on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      pausedRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  // Mouse handlers for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - sliderRef.current!.offsetLeft;
    scrollLeftRef.current = sliderRef.current!.scrollLeft;
    pausedRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    pausedRef.current = pauseOnHover ? false : false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = x - startXRef.current;
    sliderRef.current!.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div
      ref={sliderRef}
      className={`overflow-x-scroll no-scrollbar ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
    >
      <div
        ref={innerRef}
        className="inline-flex"
      >
        {content}
      </div>
    </div>
  );
};

export default AutoSlider;
