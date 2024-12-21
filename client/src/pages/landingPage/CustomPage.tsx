import { SimpleGrid, Text, Image,  Container } from '@mantine/core'
import Hero from '../../asset/cus.png'
import { useMediaQuery } from '@mantine/hooks'
import { Color } from '@/pages/util/Theme';


const CustomPage = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
     <div 
     style={{
      backgroundColor: Color.LIGHT_GRAY,
      padding: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '5rem 0px'
    }}>
        <Container  px={20} size="70rem"  >
       <SimpleGrid  cols={{ base: 1, sm: 1, lg: 2 }}
      spacing={{ base: 20, sm: 'xl', lg:200 }} mt='xl'
      style={{ alignItems:'center'}}>
      {!isMobile && <Image src={Hero} h={400} w="auto" />}

      <div>
        <Text fz={isMobile ? 16 : 26} fw={700} mb={10}>Event management with ease. From invite, to RSVP, to showtime.</Text>
        <Text fz={isMobile ? 14 : 20} fw={200} mb={10}>Start from a ready-made template, and customize your event website and registration or RSVP experience from end-to-end. Track event invitees from invitation with RSVP link to registration to check-in.</Text>
        
      </div>
    </SimpleGrid>
    </Container>
    </div>
    )
}

export default CustomPage
