import { Box, Container, Pagination, ScrollArea, Table, Text } from '@mantine/core'
import  { useState } from 'react'
import { Color } from '../util/Theme';


const data = [
    {
      book: 6687,
      name: 'jusin',
      ticket: '5',
      date: '22/12/2024',
      time: '10:20AM',
      amount: '$300',
      status: 'confirm',
    },
    {
      book: 6687,
      name: 'dope',
      ticket: '5',
      date: '22/12/2024',
      time: '10:20AM',
      amount: '$300',
      status: 'confirm',
    },
    {
      book: 6687,
      name: 'jusin',
      ticket: '5',
      date: '22/12/2024',
      time: '10:20AM',
      amount: '$300',
      status: 'confirm',
    },
  ];


const Bookings = () => {
    const [activePage, setActivePage] = useState(1);
    const rowsPerPage = 10;
    
    const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
    const rows = paginationData.map((element) => (
        <Table.Tr key={element.book}>
          <Table.Td  fz="16" >{element.book}</Table.Td>
          <Table.Td fz="16">{element.name}</Table.Td>
          <Table.Td fz="16">{element.ticket}</Table.Td>
          <Table.Td fz="16">{element.time}</Table.Td>
          <Table.Td fz="16">{element.date}</Table.Td>
          <Table.Td fz="16">{element.amount} </Table.Td>
          <Table.Td fz="16">{element.status} </Table.Td>
        </Table.Tr>
      ));
    return (
        <Container size="lg" mt="60">
            <Text>
                <span style={{fontWeight:'bold',fontSize: '24px',}}>Bookings</span>
                <br/> overview of bookings and cancellations.</Text>
            <Box mt={50} style={{    
        maxWidth:'100%',
        height: 'auto',
        background: '#F1F1F1',
        borderRadius: '1rem',
        padding: '2rem 2rem',
      }}>
        <ScrollArea   >
        <Table miw={700} horizontalSpacing="xl" verticalSpacing="sm">
      <Table.Thead  >
        <Table.Tr mb='lg'>
          <Table.Th fz="18">BookingID</Table.Th>
          <Table.Th fz="18">Name</Table.Th>
          <Table.Th fz="18">No.Ticket</Table.Th>
          <Table.Th fz="18">Time</Table.Th>
          <Table.Th fz="18">Date</Table.Th>
          <Table.Th fz="18">Amount</Table.Th>
          <Table.Th fz="18">Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody fz="18" >{rows}</Table.Tbody>
    </Table>
    </ScrollArea>
    <Pagination
          onChange={setActivePage}
          total={Math.ceil(data.length / rowsPerPage)}
          color={Color.PRIMARY}
      />
    </Box>
        </Container>
    )
}

export default Bookings
