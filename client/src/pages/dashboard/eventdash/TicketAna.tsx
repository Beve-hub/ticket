import CustomTick from '@/pages/util/CustomTick';
import { Color } from '@/pages/util/Theme'
import {  Card,  Text} from '@mantine/core'

const TicketAna = () => {
   
    return (
         <Card mt={10} style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
           }}>
           <Text>Ticket Analysis</Text>

           <CustomTick />
        </Card>
           
    )
}

export default TicketAna
