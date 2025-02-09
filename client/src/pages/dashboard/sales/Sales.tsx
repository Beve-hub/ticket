import { Container, Text } from '@mantine/core';
import ExpenseTable from './ExpenseTable';
import TopSale from './TopSale';

const Sales = () => {
  return (
    <Container  mr="40" mt="60">
      <Text mb={60}>
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Sales Revenue</span>
        <br />
        overview of designs and automation emails and social media marketing campaign .
      </Text>
      <TopSale />
      <ExpenseTable />
    </Container>
  );
};

export default Sales;
