'use client'
import { useEffect, useRef, useState } from "react"

 
export default function AnimarAlScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }else{
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
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


  // Renderizamos un div invisible que envuelve al contenido real
  return (
    <div 
      ref={elementoRef} 
      className={isVisible ? "visible-al-scroll" : "oculto-al-scroll"}
    >
      {children}

    </div>
  );
}