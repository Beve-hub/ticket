import { SimpleGrid,Card, Text, Box } from "@mantine/core"
import { Color } from '@/pages/util/Theme';


const SidePro1 = () => {
    return (
        <SimpleGrid
        cols={{ base: 1, sm: 1,md:2, lg:2  }}
        spacing={{ base: 10, sm: 'md' }}>
            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '150px',
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
            height: '150px',
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
            height: '150px',
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
            height: '150px',
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
    )
}

export default SidePro1
