import { SimpleGrid,Card, Text, Box } from "@mantine/core"
import { Color } from '@/pages/util/Theme';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";


const SidePro1 = () => {
    return (
        <SimpleGrid
        cols={{ base: 1, sm: 1,md:2, lg:2  }}
        spacing={{ base: 10, sm: 'md' }}>

            {/*card total expense */}
            <Card  style={{
            backgroundColor: Color.BLACK,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '150px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Text fz={18} fw={600} style={{color:Color.WHITE}}>$15,000.20</Text>
            <Text fz={14} 
            style={{backgroundColor: Color.SHADOW_COLOR,
             display:'flex',alignItems:'center', borderRadius:20,
              padding:'1px 4px', color:Color.SUCCESS_COLOR}}>
                <IoIosArrowRoundUp /> 24%</Text>
            </Box>
            <Text style={{color:Color.WHITE}}>Total Expense</Text>
            </Card>

           {/*card engagement rate */}
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
            <Text fz={18} fw={600}>56%</Text>
            <Text fz={14}
             style={{backgroundColor: Color.ERROR_COLORS,
              display:'flex',alignItems:'center', 
              borderRadius:20, padding:'1px 4px', 
              color:Color.ERROR_COLOR}}>
                <IoIosArrowRoundDown /> 24%</Text>
            </Box>
            <Text>Engagement Rate</Text>
            </Card>

           {/*card conversion Rate */}
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
            <Text fz={18} fw={600}>72%</Text>
            <Text fz={14} 
            style={{backgroundColor: Color.SHADOW_COLOR,
             display:'flex',alignItems:'center', borderRadius:20,
              padding:'1px 4px', color:Color.SUCCESS_COLOR}}>
                <IoIosArrowRoundUp /> 24%</Text>
            </Box>
            <Text>Conversion Rate</Text>
            </Card>

            {/*card click rate */}
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
            <Text fz={18} fw={600}>30%</Text>
            <Text fz={14} 
            style={{backgroundColor: Color.SHADOW_COLOR,
             display:'flex',alignItems:'center', borderRadius:20,
              padding:'1px 4px', color:Color.SUCCESS_COLOR}}>
                <IoIosArrowRoundUp /> 24%</Text>
            </Box>
            <Text>Click-Through Rate</Text>
            </Card>
        </SimpleGrid>
    )
}

export default SidePro1
