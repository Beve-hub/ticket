import { SimpleGrid, Text, Image,  Container, Box, Accordion, Group, Title } from '@mantine/core'
import Hero from '../../asset/cut.png'
import { useMediaQuery } from '@mantine/hooks'
import { Color } from '@/pages/util/Theme';
import CustomButton from '../util/CustomButton';
import { GoDotFill } from "react-icons/go";

const groceries = [
    {
        date: 'Friday 18 Dec',
        sub: [
          {
            time: '2:00pm',
            title: 'Event 1',
            location: 'London',
            eventType:'Music event'
          },
          {
            time: '3:00pm',
            title: 'Event 2',
            location: 'Paris',
            eventType:'Auction event'
          },
          {
            time: '4:00pm',
            title: 'Event 3',
            location: 'New York',
            eventType:'Book Club'
          },
        ],
      },
      {
        date: 'Friday 19 Dec',
        sub: [
          {
            time: '2:00pm',
            title: 'Event 1',
            location: 'London',
            eventType:'Music Concert'
          },
          {
            time: '3:00pm',
            title: 'Event 2',
            location: 'Paris',
            eventType:'BurnBoy Show'
          },
          {
            time: '4:00pm',
            title: 'Event 3',
            location: 'New York',
            eventType:'Shaback Event'
          },
        ],
      },
      {
        date: 'Friday 20 Dec',
        sub: [
          {
            time: '2:00pm',
            title: 'Event 1',
            location: 'London',
            eventType:'Web3 Onchain'
          },
          {
            time: '3:00pm',
            title: 'Event 2',
            location: 'Paris',
            eventType:'BlockChain Event'
          },
          {
            time: '4:00pm',
            title: 'Event 3',
            location: 'New York',
            eventType:'Tech event'
          },
        ],
      },
  ];

 const handleSubmit = () => {

 } 
const SampleTicket = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  

  const items = groceries.map((item, index) => (
    <Accordion.Item
      key={index}
      value={item.date}
      style={{
        marginTop: 2,
        paddingTop: isMobile ? '10px' : '20px',
      }}
    >
      <Accordion.Control style={{borderBottom: '1px solid',
        borderColor: Color.PRIMARY,
        borderRadius: 5,}}>
        <Text fz={isMobile ? 16 : 20}>{item.date}</Text>
      </Accordion.Control>
      <Accordion.Panel style={{ gap: 20 }}>
        {item.sub.map((subItem, subIndex) => (
          <div
            key={subIndex}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              gap: isMobile ? 10 : 20,
              borderBottom: '1px solid',
              borderColor: Color.PRIMARY,
                paddingBottom:10
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 5 : 20,
              }}
            >
                <div style={{display:'flex',alignItems:'center' }}>
                <GoDotFill size={16} color={Color.PRIMARY}/>
                <Text fz={isMobile ? 14 : 16} fw={600}>{subItem.time}</Text>
                </div>
              
              <Text fz={isMobile ? 14 : 24} fw={550}>{subItem.title}</Text>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? 5 : 20,
              }}
            >
                <Text fz={isMobile ? 14 : 16}>{subItem.location}</Text>              
                <Text fz={isMobile ? 14 : 16}>{subItem.eventType}</Text>
            </div>
            
            <CustomButton
              variant="filled"
              color={Color.PRIMARY}
              onClick={handleSubmit}
              label="Buy Ticket"
            />
          </div>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div 
     style={{
      backgroundColor: Color.WHITE,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '20px' : '40px'
    }}>
        <Container  px={20} size="80rem"  >
       <Box>
        <Group mb={20}>
            <GoDotFill size={20} color={Color.PRIMARY}/>
            <Text fw={500} fz={20}>Ongoing Event</Text>
        </Group>
        <Title fz={isMobile ? 32 : 75} fw={500} mb={isMobile?20:40} order={1} size="h1" textWrap="balance" >
        Where today’s innovations shape tomorrow’s world 
        </Title>

        <Accordion style={{border:2, borderBottom: Color.PRIMARY}}>
         {items}
        </Accordion>
       </Box>
    </Container>
    </div>
  );
};

export default SampleTicket;
