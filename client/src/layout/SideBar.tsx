import { Color } from '../pages/util/Theme';
import {
  Group,
  UnstyledButton,
  Box,
  Image,
  Text,
  Menu,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../asset/logo2.png';
import { FaCircleUser } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi'; // Import logout icon

const SideBar = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust breakpoint as needed
  const [pendingPath, setPendingPath] = useState(''); // State to manage pending navigation path

  // Effect to handle delayed navigation when pendingPath changes
  useEffect(() => {
    if (pendingPath) {
      navigate(pendingPath);
      setPendingPath(''); // Reset pending path after navigation
    }
  }, [pendingPath, navigate]);

  const handleLogout = () => {
    console.log('Logout clicked');
    // Add your logout logic here
  };

  return (
    <Box
      component="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: Color.TRANSPARENT_WHITE,
        width: '100%',
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
      }}
    >
      <header
        style={{
          height: '80px',
        }}
      >
        <Group
          style={{
            justifyContent: 'space-between',
            height: '100%',
            borderBottom: '1px solid #12121240',
            paddingRight: 40,
            paddingLeft: 40,
          }}
        >
          <Group>
            <Image src={Logo} h={50} /> {/* Replace with your logo */}
            <Text size="md" fw={700} color={Color.PRIMARY}>
              Ticket Hub
            </Text>
          </Group>

          <Menu
            withArrow
            shadow="md"
            position="bottom-end"
          >
            <Menu.Target>
              <UnstyledButton
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                {!isSmallScreen && <Text>Believe</Text>}
                <FaCircleUser size={30} />
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
            <Menu.Item onClick={handleLogout} style={{ display: 'flex', alignItems: 'center' }}>
  <FiLogOut size={16} style={{ marginRight: 8, paddingTop:6 }} /> Logout
</Menu.Item>

            </Menu.Dropdown>
          </Menu>
        </Group>
      </header>
    </Box>
  );
};

export default SideBar;
