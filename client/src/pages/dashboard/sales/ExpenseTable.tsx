import { Color } from '@/pages/util/Theme';
import { Box, Pagination, ScrollArea, Table, Text } from '@mantine/core';
import React, { useState } from 'react'

const data = [
    {
      category: 'Talent Expense',
      method: 'paystack',
      expense: '$5000',
      date: '22/12/2024',
    },
    {
      category: 'Talent Expense',
      method: 'paystack',
      expense: '$2000',
      date: '22/12/2024',
    },
    {
      category: 'Talent Expense',
      method: 'paystack',
      expense: '$2000',
      date: '22/12/2024',
    },  
    {
      category: 'Talent Expense',
      method: 'paystack',
      expense: '$2000',
      date: '22/12/2024',
    }, 
  ];

const ExpenseTable = () => {
    const [activePage, setActivePage] = useState(1);
    const rowsPerPage = 5;
    
    const paginationData = data.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
    const rows = paginationData.map((element) => (
        <Table.Tr key={element.category}>
          <Table.Td  fz="16" >{element.category}</Table.Td>
          <Table.Td fz="16">{element.date}</Table.Td>
          <Table.Td fz="16">{element.expense}</Table.Td>
          <Table.Td fz="16">{element.method}</Table.Td>
                 </Table.Tr>
      ));
    return (
        <Box mt={10} style={{    
            maxWidth:'100%',
            height: 'auto',
            background: Color.SECONDARY,
            borderRadius: '1rem',
            padding: '2rem 2rem',
          }}>
            <Text style={{fontWeight:'bold',fontSize: '24px',}}>Expense Management</Text>
            <ScrollArea   >
            <Table miw={700} horizontalSpacing="xl" verticalSpacing="sm">
          <Table.Thead  >
            <Table.Tr mb='lg'>
              <Table.Th fz="18">BookingID</Table.Th>
              <Table.Th fz="18">Name</Table.Th>
              <Table.Th fz="18">No.Ticket</Table.Th>
              <Table.Th fz="18">Time</Table.Th>
              
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
    )
}

export default ExpenseTable
