import { SimpleGrid, Text,Button, Image,  Container } from '@mantine/core'
import { Color } from '../util/Theme'
import Hero from '../../asset/hero-image.png'
import { useMediaQuery } from '@mantine/hooks'


const HeroPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <Container  px={20} size="70rem" mt={150}>
       <SimpleGrid  cols={{ base: 1, sm: 1, lg: 2 }}
      spacing={{ base: 20, sm: 'xl', lg:200 }} mt='xl'
      style={{ alignItems:'center'}}>
      <div>
        <Text fz={isMobile ? 24 : 32} fw={700} mb={10}>Create any event in minutes.</Text>
        <Text fz={isMobile ? 14 : 16} fw={200} mb={10}>Simple to use tools for a successful and profitable event</Text>
        <Button variant="filled" color={Color.PRIMARY}>Get Started</Button>
      </div>
      <Image src={Hero}  h={330} w="auto"/>  
    </SimpleGrid>
    </Container>
    )
}

export default HeroPage
