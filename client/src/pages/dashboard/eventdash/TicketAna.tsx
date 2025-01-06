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
            height: '220px',
           }}>
           <Text style={{ fontWeight: 'bold', 
                    fontSize: 16, }}>Ticket Analysis</Text>

           <CustomTick />
        </Card>
           
    )
}

export default TicketAna
