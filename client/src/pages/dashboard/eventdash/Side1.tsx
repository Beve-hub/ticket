import { Card, Group, SimpleGrid, Text } from '@mantine/core'
import Revenue from './Revenue'
import { BsCurrencyDollar } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { Color } from '@/pages/util/Theme'

const Side1 = () => {
    return (
        <div>
             <SimpleGrid
      cols={{ base: 1, sm: 1,md:2, lg:2  }}
      spacing={{ base: 20, sm: 'lg' }}
    >
      <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '250px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
           <Group style={{
            backgroundColor: Color.PRIMARY,
            padding: 2,
            borderRadius: 30,
            color: Color.WHITE,
            width:'40px',
            height:'40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           }}>
                < BsCurrencyDollar size={24}/>
           </Group>
            <Group style={{display:'grid'}}>
                <Text>Total Revenue</Text>              
                <Text fw={800} fz={24}>$6,240.28</Text>                
            </Group>
      </Card>
      <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '250px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
           <Group style={{
            backgroundColor: Color.PRIMARY,
            padding: 2,
            borderRadius: 30,
            color: Color.WHITE,
            width:'40px',
            height:'40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           }}>
                < IoTicketOutline size={24}/>
           </Group>
            <Group style={{display:'grid'}}>
                <Text>Ticket Revenue</Text>              
                <Text fw={800} fz={24}>$16,240.28</Text>                
            </Group>
      </Card>
    </SimpleGrid>
    <Revenue/>
        </div>
       
    )
}

export default Side1
