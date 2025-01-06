import { Text, Button, Container } from '@mantine/core';
import { Color } from '../util/Theme';
import Hero from '../../asset/hero_image.jpg';
import Hero2 from '../../asset/ticket2.jpg';
import Hero3 from '../../asset/preming.jpg';
import Hero4 from '../../asset/comedy2.png';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

const HeroPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const heroImages = [Hero, Hero2, Hero3, Hero4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  //Auto-slide logic using useffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
    }, 10000)

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);
  return (
    <Container  size="lg" mt={150}>
      <div
        style={{
          position: 'relative',
          height: isMobile ? '400px' : '500px',
          width:'100%',
          backgroundColor: Color.TRANSPARENT_BLACK,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
            width: `${heroImages.length * 100}%`,
          }}
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              
                height: isMobile ? '400px' : '500px',
              }}
            >
              <div 
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: Color.TRANSPARENT_BLACK, // Semi-transparent overlay
                zIndex: 1,
              }}
              >
              <div
                style={{    
                  position: 'relative',
                  left: isMobile ?'3%' : '7%',
                  top:'40%',
                  zIndex: 2,
                  color: 'white',
                }}
              >
                <Text fz={isMobile ? 20 : 36} fw={700} mb={5}>
                  Create any event in minutes.
                </Text>
                <Text fz={isMobile ? 10 : 20} fw={200} mb={20}>
                  Simple to use tools for a successful and profitable event.
                </Text>
                <div style={{
                  position:'absolute',
                  left: isMobile ?'5%' : '4%',
                }}>
                <Button variant="filled" color={Color.PRIMARY}>
                  Get Started
                </Button>
                </div>
              </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Three Dots for Navigation */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
          }}
        >
          {heroImages.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: index === currentSlide ? Color.PRIMARY : 'white',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HeroPage;