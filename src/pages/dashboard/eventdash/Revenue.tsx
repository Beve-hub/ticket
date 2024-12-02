import { Color } from '@/pages/util/Theme'
import { data } from '@/pages/util/ComponetData'
import { Box, Text } from '@mantine/core'
import { BarChart } from '@mantine/charts';
interface Props {
    
}

const Revenue: React.FC<Props> = () => {
    return (
        <Box mt={20} style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
           
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Text fw={700} fz={20}>
                Sales Revenue
            </Text>
            
      <BarChart
      mt={100}
        h={250}
        data={data}
        dataKey="day"
        series={[{ name: 'Revenue', color: Color.PRIMARY }]}
             />
        </Box>
    )
}

export default Revenue
