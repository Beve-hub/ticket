import { Text, Button, Container } from '@mantine/core';
import { Color } from '../util/Theme';
import Hero from '../../asset/hero_image.jpg';
import { useMediaQuery } from '@mantine/hooks';

const HeroPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container px={20} size="70rem" mt={150}>
      <div
        style={{
          position: 'relative',
          height: isMobile ? '400px' : '500px',
          width: isMobile ? '100%' : '100%',
          backgroundImage: `url(${Hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: Color.TRANSPARENT_BLACK,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',            
            color: 'white',
          }}
        >
          <Text fz={isMobile ? 20 : 36} fw={700} mb={5}>
            Create any event in minutes.
          </Text>
          <Text fz={isMobile ? 10 : 20} fw={200} mb={20}>
            Simple to use tools for a successful and profitable event.
          </Text>
          <Button variant="filled" color={Color.PRIMARY} >
            Get Started
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroPage;
``