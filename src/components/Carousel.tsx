import { Box } from '@mui/material';
import { ReactNode, useEffect, useRef, useState, Children } from 'react';

interface Props {
  children: ReactNode;
  time?: number
}

const Carousel: React.FC<Props> = ({ children, time = 3000 } : Props) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const totalSlides = Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, time);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    if (carouselRef.current) {
      const offset = -index * 100;
      carouselRef.current.style.transform = `translateX(${offset}%)`;
    }
  }, [index]);

  return (
    <Box className="relative overflow-hidden w-full">
      <Box
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Carousel;
