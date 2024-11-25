import React from 'react';
import { Group,  Menu, UnstyledButton } from '@mantine/core';
import { IoChevronDown } from "react-icons/io5";
import { Color } from './Theme';
import { useMediaQuery } from '@mantine/hooks';

interface CustomSelectProps {
  data: { label: string; icon: JSX.Element }[];
  value: { label: string; icon: JSX.Element }; // Controlled value
  onChange: (selectedItem: { label: string; icon: JSX.Element }) => void; // Controlled onChange
  [key: string]: any; // Allow passing additional props
}

const CustomSelect: React.FC<CustomSelectProps> = ({ data, value, onChange, ...props }) => {
  const [opened, setOpened] = React.useState(false);
  const isSmall = useMediaQuery('(max-width: 768px)');

  const items = data.map((item) => (
    <Menu.Item
      leftSection={item.icon}
      onClick={() => onChange(item)} // Call onChange with selected item
      key={item.label}
      
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
      {...props}
    >
      <Menu.Target>
        <UnstyledButton data-expanded={opened || undefined} style={{display:'flex', alignItems:'center', width: isSmall ? '100%' : '580px',justifyContent: 'space-between', backgroundColor: Color.WHITE, padding: '5px 15px', borderRadius:'5px'}}>
          <Group gap="xs">
            {value.icon}
            <span>{value.label}</span>
          </Group>
          <Group style={{display:'flex', justifyContent: 'flex-end', alignItems:'flex-end'}}>
          <IoChevronDown size={16} />
          </Group>
          
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default CustomSelect;
