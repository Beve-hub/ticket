import { Color } from '@/pages/util/Theme'
import { Box, Card, Text, UnstyledButton } from '@mantine/core'
import { useNavigate } from 'react-router-dom';

const Book = [
    {
        name: 'David Smith',
        status: 'pending',
        price: 290,
    },
    {
        name: 'David Smith',
        status: 'pending',
        price: 190,
    },
    {
        name: 'David Smith',
        status: 'pending',
        price: 200,
    },
]
const BookingCard = () => {
    const navigate = useNavigate();
    return (
        <Card mt={10} style={{
            backgroundColor: Color.SECONDARY,
            padding: 10,
            borderRadius: 10,
            width: '100%',
            height: '270px',
           }}>
            <Box mt={10} style={{display:'flex',
              justifyContent:'space-between',
              alignItems:'center',}}>
                <Text  style={{ fontWeight: 'bold', 
                    fontSize: 16, }}>
                    Recent Booking 
                </Text>
                <UnstyledButton onClick={() => navigate('/sales')} fz={13} fw={500} style={{color:Color.PRIMARY}}>
                    View All
                </UnstyledButton>
            </Box>

            <Box mt={10}>
            {Book.map((item, index) => (
                <Box key={index} mt={10} 
                style={{display:'flex', 
                justifyContent:'space-between',
                backgroundColor:Color. SECONDARY_BG_COLOR, padding:15, borderRadius:5}}>
                    <Text>{item.name}</Text>
                    <Text>${item.price}</Text>
                    <Text>{item.status}</Text>
                </Box>))}
            </Box>
           
        </Card>
    )
}

export default BookingCard
