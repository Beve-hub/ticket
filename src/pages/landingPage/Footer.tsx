import { Image, Text, ActionIcon, Group,  Flex, Container } from '@mantine/core';
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Logo from '../../asset/logo2.png';


import { useMediaQuery } from '@mantine/hooks';
import { Color } from '../util/Theme';

const data = [
  {
    title: 'Product',
    links: [
      { label: 'Ticketing', link: '/' },
      { label: 'Box office', link: '/about' },
      { label: 'Cashless Payment', link: '/investment' },
    ],
  },
  {
    title: 'Company',
    links: [
        { label: 'About Us', link: '/about' },
        { label: 'FAQ', link: '/faq' },
        { label: 'Blog', link: '/blog' },
     ],
  }
];
const Footer = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        component="a"
        href={link.link}
        style={{ display: 'block', color: Color.GRAY, fontSize: '16px', padding: '3px 0' }}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title} style={{ width: '160px', textAlign: isSmallScreen ? 'center' : 'left' }}>
        <Text style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Greycliff CF, var(--mantine-font-family)', marginBottom: 'calc(var(--mantine-spacing-xs) / 2)', color: Color.BLACK }}>
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (

    <footer style={{ paddingTop: 'calc(var(--mantine-spacing-xl) * 2)', paddingBottom: 'calc(var(--mantine-spacing-xl) )', backgroundColor: Color.WHITE, borderTop: '1px solid var(--mantine-color-gray-2)' }}>
      
      <Container>
      <Flex 
        gap="xl"
        justify="space-between"
        align="center"
        direction={isSmallScreen ? 'column' : 'row'}
        wrap="wrap"
        style={{ width: '100%' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src={Logo} alt="" width={70} height={70} style={{ maxWidth: '1000px' }} />
         
        </div>
        <div style={{ gap: 70, display: 'flex', flexWrap: 'wrap', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
          {groups}

          <div style={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
            <Text color="black" mt="5px" fw="bold" fz="20px">
              Follow Us
            </Text>
            <Group justify={isSmallScreen ? 'center' : undefined}>
          <ActionIcon size="lg" color={Color.GRAY} variant="subtle">
            <FaFacebookF size={24} />
          </ActionIcon>
          <ActionIcon size="lg" color={Color.GRAY} variant="subtle">
            <FaXTwitter size={24} />
          </ActionIcon>
          <ActionIcon size="lg" color={Color.GRAY} variant="subtle">
            <FaYoutube size={24} />
          </ActionIcon>
          <ActionIcon size="lg" color={Color.GRAY} variant="subtle">
            <AiFillInstagram size={24} />
          </ActionIcon>
        </Group>
          </div>
        </div>
      </Flex>
      </Container>
      
    </footer>

    )
}

export default Footer
