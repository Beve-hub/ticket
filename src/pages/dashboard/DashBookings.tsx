import { Box,  Container, Group,  Text,  UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import CustomInput from '../util/CustomInput';
import { Color } from '@/pages/util/Theme';


const tickets = [
  { id: 1, name: "Concert A", date: "2024-12-10", price:'$50' },
  { id: 2, name: "Sports Event B", date: "2024-12-15", price:'$250' },
  { id: 3, name: "Theater C", date: "2024-12-20", price:'$20' },
  { id: 4, name: "Concert D", date: "2024-12-25", price:'$100' },
];

const DashBookings = () => {
    const isSmall = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const [searchBuy, setSearchBuy] = useState("");
  const [fillterTickets, setFilterTickets] = useState(tickets);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchBuy(query);

    // Filter tickets based on query
    const filtered = tickets.filter((ticket) =>
      ticket.name.toLowerCase().includes(query)
    );
    setFilterTickets(filtered);
  };

  const handleClick = (ticket: { id: number; name: string; date: string, price: string }) => {
    navigate('/buy', { state: ticket });
  };

  return (
    <Container size={isSmall ? '90%' : '25rem'}
    style={{
        marginTop: '7rem', // Adds 20rem spacing from the top
        padding: '5rem 2rem',
        borderRadius:'5px'
    }}>
        <div>
        <CustomInput
        placeholder="Search tickets..."
        value={searchBuy}
        onChange={handleSearch}
        mb="md"
      />
        
      <div>
        {fillterTickets.length > 0 ? (
          <div>
            {fillterTickets.map((ticket) => (
              <Box key={ticket.id}  >
                <Group style={{display:'flex', justifyContent:'space-between',}}>
                <Text> {ticket.name} </Text> 
                
                <UnstyledButton onClick={() => handleClick(ticket)} style={{color:Color.PRIMARY}}>Buy</UnstyledButton>
                     
                </Group>
                
              </Box>
            ))}
          </div>
        ) : (
          <p> No current event</p>
        )}
      </div>
        </div>
      
    </Container>
  );
};

export default DashBookings;
