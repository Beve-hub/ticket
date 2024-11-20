import { Box, Button, Center, Text } from '@mantine/core'
import { Color } from '../util/Theme'
import { useMediaQuery } from '@mantine/hooks';

const Pricing = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    return (
        <Center  h={300}  mt={80}  mb={80}>
      <Box bg={Color.PRIMARY} style={{
          width:  isSmallScreen ? '90%' : '60rem', // Increased width to 80rem
          padding: '3rem', // Added padding for better spacing
          textAlign: 'center', // Center-aligns text and content
          alignItems: 'center', // Ensures alignment consistency
          display: 'flex', // Flexbox for vertical alignment
          flexDirection: 'column', // Stack items vertically
          justifyContent: 'center', // Center aligns Button and Text
            borderRadius: '1rem'    
        }}>
        <Text fz={isSmallScreen ? 16 : 24} fw={700} mb={10} style={{textAlign:'center', color:Color.WHITE}}>Pricing</Text>
        <Text fz={isSmallScreen ? 14 : 16}  mb={10} style={{textAlign:'center',color:Color.WHITE}}>Compare all our features and pricing to know which package is right for you</Text>
        <Button variant="filled" color={Color.BLACK}>Get Started</Button>
      </Box>
    </Center>
    )
}

export default Pricing
