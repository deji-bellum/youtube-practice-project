// src/stories/SidebarItem.stories.js
import React, { useState } from 'react';
import { HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import SidebarItem from '../library/essential-components/SidebarItem';

export default {
  title: 'EssentialComponents/SidebarItem',
  component: SidebarItem,
  argTypes: {
    label: { control: 'text' },
    isActive: { control: 'boolean' },
    icon: { table: { disable: true } },
  },
};

const Template = (args) => <SidebarItem {...args} />;

/* ──────────────────────────────────
 * 1 | Plain item
 * ────────────────────────────────── */
export const Default = Template.bind({});
Default.args = {
  icon: <HamburgerIcon />,
  label: 'Home',
  isActive: false,
};

/* ──────────────────────────────────
 * 2 | Active state
 * ────────────────────────────────── */
export const Active = Template.bind({});
Active.args = {
  icon: <StarIcon />,
  label: 'Trending',
  isActive: true,
};

/* ──────────────────────────────────
 * 3 | Interactive demo – click to toggle active
 * ────────────────────────────────── */
export const Interactive = () => {
  const [active, setActive] = useState(false);

  return (
    <SidebarItem
      icon={<StarIcon />}
      label={active ? 'Selected' : 'Click Me'}
      isActive={active}
      onClick={() => setActive(!active)}
    />
  );
};
