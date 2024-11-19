import {
    Group,
    Button,
    Box,
    Burger,
    Drawer,
  } from '@mantine/core';
  import { useDisclosure,useMediaQuery  } from '@mantine/hooks';
  import { useEffect, useState } from 'react';
  import { Color } from '../utils/Theme';
 
  
  const Navbar = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [scrolled, setScrolled] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust breakpoint as needed
  
    // Effect to handle scroll event
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <Box
        component="nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
           width: '100%',
           backdropFilter: scrolled ? 'none' : 'blur(10px)',
           backgroundColor: scrolled ? Color.BLACK : Color.BLACK,
          zIndex: 1000,
          transition: 'background-color 0.3s ease',
          boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <header
        
          style={{
            height: '80px',
          }}
        >
          <Group style={{ justifyContent: 'space-between', height: '100%' }}>
            <div>Logo</div> {/* Replace with your logo */}
            {!isSmallScreen && (
              <Group className="desktop-menu" style={{ display: 'flex' }}>
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </Group>
            )}
            {isSmallScreen && (
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                className="mobile-menu"
              />
            )}
          </Group>
        </header>
  
        {isSmallScreen && (
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
          >
            <Group
              style={{ justifyContent: 'center', flexDirection: 'column' }}
              grow
              pb="xl"
              px="md"
            >
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </Drawer>
        )}
      </Box>
    );
  };
  
  export default Navbar;
  