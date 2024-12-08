import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Box, Container, Group, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Color } from '../../util/Theme';

interface Props {}

const MyAccount: React.FC<Props> = () => {
  const isSmall = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
 
  return (
    <Container
      size={isSmall ? '90%' : '50rem'}
      style={{
        marginTop: '6rem', // Adds 20rem spacing from the top
        padding: '1rem',
        borderRadius: '5px',
      }}
    >
      <Text
        style={{
          fontSize: '1.3rem', // Sets the font size to 1.8rem
          fontWeight: 'bold', // Sets the font weight to bold
          color: Color.PRIMARY, // Sets the text color to white
        }}
      >
        My Account
      </Text>

      <Box
        style={{
          marginTop: '2rem', // Adds 20rem spacing from the top
          borderRadius: '5px',
          height: '40rem',
        }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 10, sm: 'sm' }}>
          <UnstyledButton
            onClick={() => navigate('/eventDashboard')}
            style={{
              marginTop: '2rem', // Adds 20rem spacing from the top
              backgroundColor: Color.PRIMARY,
              borderRadius: '5px',
              height: '8rem',
              width: '13rem',
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <Box>
              <Text style={{ fontSize: '1.2rem', textAlign: 'center' }}>Profile</Text>
              <Group>
                <Text style={{ fontSize: '1rem' }}>location</Text>
                <Text style={{ fontSize: '1rem' }}>venue</Text>
              </Group>
            </Box>
          </UnstyledButton>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default MyAccount;
