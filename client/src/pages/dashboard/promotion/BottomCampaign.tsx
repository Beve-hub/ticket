import { SimpleGrid,Card, Text, Box,UnstyledButton } from "@mantine/core"
import { Color } from '@/pages/util/Theme';

const BottomCampaign = () => {
    return (
        <div style={{marginTop: '30px',marginBottom:20}} >
            <Box style={{display:'flex',justifyContent: 'space-between',}}>
            <Text style={{fontWeight:'bold',fontSize: '24px',}}>
            Recent Campaign
            </Text>
            <UnstyledButton>Button</UnstyledButton>
            </Box>
            
            <SimpleGrid
        cols={{ base: 1, sm: 1,md:2, lg:3  }}
        spacing={{ base: 10, sm: 'md' }}>
            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Text fz={18} fw={600}>$5,000.20</Text>
            <Text >Total Expense</Text>
            </Box>
            <Text>Total Expense</Text>
            </Card>
            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Text fz={18} fw={600}>$5,000.20</Text>
            <Text >Total Expense</Text>
            </Box>
            <Text>Total Expense</Text>
            </Card>
            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Text fz={18} fw={600}>$5,000.20</Text>
            <Text >Total Expense</Text>
            </Box>
            <Text>Total Expense</Text>
            </Card>
        </SimpleGrid>
        </div>
        
    )
}

export default BottomCampaign
