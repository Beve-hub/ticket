import { Color } from '../pages/util/Theme';
import {
    Group,
    Button,
    Box,
    Burger,
    Drawer,
    Image,
    Text,
  } from '@mantine/core';
  import { useDisclosure, useMediaQuery } from '@mantine/hooks';
  import { useEffect, useState } from 'react';
 import Logo from '../asset/logo2.png'
 import {useNavigate } from "react-router-dom";


  
  const Navbar = () => {
    const navigate = useNavigate();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [scrolled, setScrolled] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust breakpoint as needed
    const [pendingPath, setPendingPath] = useState(""); // State to manage pending navigation path

    // Effect to handle scroll event
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
     // Effect to handle delayed navigation when pendingPath changes
  useEffect(() => {
    if (pendingPath) {
      navigate(pendingPath);
      setPendingPath(""); // Reset pending path after navigation
    }
  }, [pendingPath, navigate]);

    const handleNavClick = (path: string) => {
      if (path) {
        setPendingPath(path);
      }
    };
  
    return (
      <Box
        component="nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          backdropFilter: scrolled ? 'none' : 'blur(10px)',
          backgroundColor:Color.TRANSPARENT_WHITE,
          width: '100%',
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
            
            <Group  style={{ justifyContent: 'space-between', height: '100%', borderBottom: '1px solid #12121240', paddingRight:40,paddingLeft:40 }}>
           <Group>
           <Image src={Logo}  h={50} /> {/* Replace with your logo */}
           <Text size="md" fw={700} color={Color.PRIMARY} >
            Ticket Hub</Text>
           </Group>
            
            {!isSmallScreen && (
              <Group className="desktop-menu" style={{ display: 'flex' }}>
                <Button variant="default" onClick={() => handleNavClick("/login")}>Log in</Button>
                <Button variant="filled" color={Color.PRIMARY} onClick={() => handleNavClick("/register")}>Sign up</Button>
              </Group>
            )}
            {isSmallScreen && (
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                style={{                  
                  backgroundColor:  Color.WHITE ,                 
                }}
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
          transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
          style={{
            '.mantine-Drawer-drawer': { backgroundColor: Color.BLACK }, // Targets the drawer
            '.mantine-Drawer-header': { backgroundColor: Color.BLACK }, // Targets the header
            '.mantine-Drawer-title': { color: Color.WHITE }, // Targets the title text
          }}
        >
          <Group
            style={{ justifyContent: 'center', flexDirection: 'column', }}
            grow
            pb="xl"
            px="md"
            mt="xl"
          >
             <Button variant="default">Log in</Button>
             <Button variant="filled" color={Color.PRIMARY}>Sign up</Button>
          </Group>
        </Drawer>
        
        )}
      </Box>
    );
  };
  
  export default Navbar;
  