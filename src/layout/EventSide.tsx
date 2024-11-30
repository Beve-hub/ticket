import { AppShell, AppShellHeader, Burger, Group, Image, Text, Box, Center, UnstyledButton,  } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../asset/logo2.png'
import { useState } from 'react';
import { SideBarData } from '@/pages/util/ComponetData';
import { Color } from '@/pages/util/Theme';
import { FiLogOut } from "react-icons/fi";
import { FaCircleUser } from 'react-icons/fa6';
import { IoMdSettings } from "react-icons/io";

const EventSide = () => {
    const navigate = useNavigate();
    const [opened, {toggle}] = useDisclosure(false);
    const isSmallScreen = useMediaQuery("(max-width: 768px)");
    const isSmall = useMediaQuery("(min-width: 768px)");
    const [activePath, setActivePath] = useState(SideBarData[0].path);

    return (
        <AppShell
        header={{ height: 60 }}
        navbar={{
          width: isSmallScreen ? (opened ?'5%' : 0) : 200,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md">
        <AppShellHeader withBorder={false} pt="md">
        <Group px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group>
          <Image src={Logo} alt="" width={30} height={35} style={{ marginLeft: 10 }} />
          <Text>Ticket Nation</Text>
        </Group>
        </Group>
      </AppShellHeader>

      <AppShell.Navbar pt="40" >
        <Group>
            {SideBarData.map((item, index) => (
                 <NavLink  key={index}
                 to={item.path}
                 onClick={() => setActivePath(item.path)}
                 style={{
                   display: "flex",
                   justifyContent: "flex-start",
                   alignItems: "center",
                   fontSize: "18px",
                   fontWeight: 500,
                   cursor: "pointer",
                   background: activePath === item.path
                     ? "linear-gradient(90deg, #293991 100%, transparent 0%)"
                     : "transparent",
                   backgroundSize: activePath === item.path ? "100% 100%" : "0 100%",
                   backgroundPosition: "left center",
                   color: activePath === item.path ? Color.WHITE : Color.GRAY,
                   padding: "8px 30px",
                   borderRadius: "0px 30px 30px 0px",
                   textDecoration: "none",
                   width: "12rem",
                   // Animate background size and color
                   transition: "background-size 0.5s ease-in-out, color 0.5s ease-in-out",
                 }}
                >
                     <Text style={{ marginRight: "5px", display: "flex", alignItems: "center" }}>
                   {item.icon}
                 </Text>
                 <Text>{item.name}</Text>
                         </NavLink>
            ))}
           
           {isSmallScreen && (
            <Box
              style={{
                position: "absolute",
                bottom: 20,
                width: "80%",
                borderTop: "1px solid #ccc",
                padding: 20,
              }}
            >
              <Center display="grid" mt="auto" style={{ width: "50%", gap: 10 }}>
              <UnstyledButton
                 
                 style={{
                   display: "flex",
                   gap: 10,
                   textDecoration: "none",
                   justifyContent: "flex-start",
                   width: "100%",
                   cursor: "pointer",
                   alignItems: "center",
                 }}
                 onClick={() => navigate('/settings')}
               >
                 <IoMdSettings size={20} />
                 <Text fw="400" fz="16" color={Color.BLACK}>
                   Settings
                 </Text>
               </UnstyledButton>
               <UnstyledButton style={{
                    display: "flex",
                    gap: 10,
                    textDecoration: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                  }}>
                 <FaCircleUser  size={18} />
                  <Text fw="400" fz="16" color={Color.BLACK}>
                   Victor
                  </Text>
                  <FiLogOut size={14} />
               </UnstyledButton>
                 
              
              </Center>
            </Box>
          )}
          {isSmall && (
            <Box
              style={{
                position: "absolute",
                bottom: 40,
                width: "80%",
                borderTop: "1px solid #ccc",                
                padding: 20,
              }}
            >
              <Center display="grid" mt="auto" style={{ width: "100%", gap: 10 }}>
              <UnstyledButton
                 onClick={() => navigate('/settings')}
                 style={{
                   display: "flex",
                   gap: 10,
                   textDecoration: "none",
                   justifyContent: "flex-start",
                   width: "100%",
                   cursor: "pointer",
                   alignItems: "center",
                 }}
               >
                 <IoMdSettings size={20} />
                 <Text fw="400" fz="16" color={Color.BLACK}>
                   Settings
                 </Text>
               </UnstyledButton>
                <UnstyledButton
                  style={{
                    display: "flex",
                    gap: 10,
                    textDecoration: "none",
                    justifyContent: "flex-start",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <FaCircleUser  size={20} />
                  <Text fw="400" fz="14" color={Color.BLACK}>
                   Believe
                  </Text>                 
                  <FiLogOut size={14} />
                </UnstyledButton>
              </Center>
            </Box>
          )}
        </Group>
      </AppShell.Navbar>

        </AppShell>
    )
}

export default EventSide
