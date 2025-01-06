import React from 'react';
import { Container, Grid, Text } from '@mantine/core';
import Side1 from './Side1';
import Side2 from './Side2';

interface Props {}

const EventDashboard: React.FC<Props> = () => {
  return (
    <Container mr="40" mt="60">
      <Text>
        <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Dashboard</span> <br /> overview of
        bookings, promotion, analytics and sales revenue
      </Text>
      <div>
        <Grid my="md" gutter="lg">
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Side1 />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Side2 />
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
};

export default EventDashboard;
