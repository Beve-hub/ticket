import { SimpleGrid, Text, Image, Container, Box } from '@mantine/core';
import Hero from '../../asset/art.jpg';
import Hero2 from '../../asset/career.jpg';
import Hero3 from '../../asset/web3.jpg'; 
import Hero4 from '../../asset/car.jpg';
import Hero5 from '../../asset/carn.jpg';
import Hero6 from '../../asset/movie.jpg'; 
import { useMediaQuery } from '@mantine/hooks';
import { Color } from '@/pages/util/Theme';

const CustomPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div
      style={{
        backgroundColor: Color.LIGHT_GRAY,
        padding: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem 0px 0px 0px',
      }}
    >
      <Container px={20} size="70rem">
        <SimpleGrid
          cols={isMobile ? 1 : 2}
          spacing={{ base: 20, sm: 'xl', lg: 200 }}
          mt="xl"
          style={{ alignItems: 'center' }}
        >
          {!isMobile && (
            <SimpleGrid cols={3} 
            spacing="xl" verticalSpacing="xs"
            >
            <Box
              component="img"
              src={Hero}
              alt="Image 1"
              style={{ height: '150px',width: '150px', objectFit: 'cover', borderRadius: '10px' }}
              className="hoverable"
            />
            <Box
              component="img"
              src={Hero2}
              alt="Image 2"
              style={{ height: '150px',width: '150px', objectFit: 'cover', borderRadius: '10px' }}
              className="hoverable"
            />
           
            <Box
              component="img"
              src={Hero4}
              alt="Image 4"
              style={{ height: '150px',width: '150px', objectFit: 'cover', borderRadius: '10px' }}
              className="hoverable"
            />
            <Box
              component="img"
              src={Hero3}
              alt="Image 5"
              style={{ height: '150px',width: '150px', objectFit: 'cover', borderRadius: '10px' }}
              className="hoverable"
            />
            <Box
              component="img"
              src={Hero5}
              alt="Image 5"
              style={{ height: '150px',width: '150px', objectFit: 'cover', borderRadius: '10px' }}
              className="hoverable"
            />
            <Box
              component="img"
              src={Hero6}
              alt="Image 5"
              style={{ height: '150px',width: '150px', objectFit: 'cover', borderRadius: '10px' }}
              className="hoverable"
            />
          </SimpleGrid>
          )}
          

          <div>
            <Text fz={isMobile ? 16 : 26} fw={700} mb={10}>
              Event management with ease. From invite, to RSVP, to showtime.
            </Text>
            <Text fz={isMobile ? 14 : 20} fw={200} mb={10}>
              Start from a ready-made template, and customize your event website
              and registration or RSVP experience from end-to-end. Track event
              invitees from invitation with RSVP link to registration to
              check-in.
            </Text>
          </div>
        </SimpleGrid>
      </Container>
      <style >{`
        .hoverable:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default CustomPage;
