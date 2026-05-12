'use client'
import { useEffect, useRef, useState, ReactNode } from "react"

interface AnimarAlScrollProps {
  children: ReactNode;
}
 
 
export default function AnimarAlScroll({ children }: AnimarAlScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }else{
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (elementoRef.current) {
      observer.observe(elementoRef.current);
    }

    return () => {
      if (elementoRef.current) {
        observer.unobserve(elementoRef.current);
      }
    };
  }, []);


  return (
    <div 
      ref={elementoRef} 
      className={isVisible ? "visible-al-scroll" : "oculto-al-scroll"}
    >
      {children}

    </div>
  );
}
