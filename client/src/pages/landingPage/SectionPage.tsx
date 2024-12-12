import { SimpleGrid, Text, Image,  Container } from '@mantine/core'
import Hero from '../../asset/cut.png'
import { useMediaQuery } from '@mantine/hooks'


const SectionPage = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <Container  px={20} size="70rem" >
       <SimpleGrid  cols={{ base: 1, sm: 1, lg: 2 }}
      spacing={{ base: 20, sm: 'xl', lg:200 }} mt='xl'
      style={{ alignItems:'center'}}>
      <div>
        <Text fz={isMobile ? 16 : 24} fw={700} mb={10}>Create brilliantly customizable event registration and online RSVP forms.</Text>
        <Text fz={isMobile ? 14 : 16} fw={200} mb={10}>From themes to layout, custom questions to secondary events, online payments to online invitations, RSVPify gives you complete control over your entire event registration and RSVP form.</Text>
      </div>
      {!isMobile && <Image src={Hero} h={330} w="auto" />}
    </SimpleGrid>
    </Container>
    )
}

export default SectionPage
