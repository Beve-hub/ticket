import { Container, Text } from '@mantine/core'
import TopCampaign from './promotion/TopCampaign'
import BottomCampaign from './promotion/BottomCampaign'


const Promotion = () => {
    return (
        <Container size="lg" mt="60">
           <Text mb={60}>
                <span style={{fontWeight:'bold',fontSize: '24px',}}>Promotion</span>
                <br/>
                overview of designs and automation emails and social media marketing campaign .
            </Text>
            <TopCampaign />
            <BottomCampaign />
        </Container>
    )
}

export default Promotion
