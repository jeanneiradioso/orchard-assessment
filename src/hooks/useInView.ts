import { useState, useEffect } from 'react';

const useInView = (ref: React.RefObject<HTMLElement | null>, threshold = 0.5): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return inView;
};

export default useInView;
