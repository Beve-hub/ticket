import { PieChart } from '@mantine/charts';
import { Card, Text,  } from "@mantine/core"
import { Color } from '@/pages/util/Theme';


const data = [
    { name: 'USA', value: 400, color: 'green' },
    { name: 'Other', value: 200, color: 'gray.6' },
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
           <Text>Campaign Per Click</Text>
           <PieChart
      data={data} tooltipDataSource="segment" mx="auto"
    />
        </Card>
    )
}

export default SidePro2
