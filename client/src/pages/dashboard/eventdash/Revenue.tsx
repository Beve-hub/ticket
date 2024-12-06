import { Color } from '@/pages/util/Theme'
import { Box, Text } from '@mantine/core'
import { LineChart } from '@mantine/charts';
interface Props {
    
}
export const data = [
    {
      date: 'Mar 22',
      Media: 2890,
      Email: 2338,
      
    },
    {
      date: 'Mar 23',
      Media: 2756,
      Email: 2103,
      
    },
    {
      date: 'Mar 24',
      Media: 3322,
      Email: 986,
     
    },
    {
      date: 'Mar 25',
      Media: 3470,
      Email: 2108,
      
    },
    {
      date: 'Mar 26',
      Media: 3129,
      Email: 1726,
      
    },
  ];
const Revenue: React.FC<Props> = () => {
    return (
        <Box mt={20} style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '400px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Text fw={700} fz={20} >
                Sales Revenue
            </Text>
            <div style={{marginTop:20}}>
            <LineChart
      h={300}
      data={data}
      dataKey="date"
       series={[
        { name: 'Media', color: 'indigo.6' },
        { name: 'Email', color: 'blue.6' },
      ]}
      curveType="natural"
      withDots={false}
     
    />
            </div>
        
        </Box>
    )
}

export default Revenue
