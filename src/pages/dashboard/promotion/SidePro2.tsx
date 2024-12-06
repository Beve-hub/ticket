import { LineChart } from '@mantine/charts';
import { Card, Text,  } from "@mantine/core"
import { Color } from '@/pages/util/Theme';


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
const SidePro2 = () => {
    return (
        <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '310px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
           <Text style={{ fontWeight: 'bold', 
                    fontSize: 16, }}>Campaign Per Click</Text>
           <div>
           <LineChart
      h={200}
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
          
        </Card>
    )
}

export default SidePro2
