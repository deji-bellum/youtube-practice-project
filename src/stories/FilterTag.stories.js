import React, { useState } from 'react';
import { ChakraProvider, Box, Stack } from '@chakra-ui/react';
import FilterTag from '../library/essential-components/FilterTag';

export default {
  title: 'EssentialComponents/FilterTag',
  component: FilterTag,

};

const Template = (args) => {
  const [selected, setSelected] = useState(args.isSelected);
  return (
    <FilterTag
      {...args}
      isSelected={selected}
      onClick={() => setSelected(!selected)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'All',
  isSelected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Popular',
  isSelected: true,
};

export const TagGroup = () => {
  const [selected, setSelected] = useState('All');
  const options = ['All', 'Popular', 'New', 'Featured'];

  return (
    <ChakraProvider>
      <Stack direction="row" spacing={4} p={5}>
        {options.map((label) => (
          <FilterTag
            key={label}
            label={label}
            isSelected={selected === label}
            onClick={() => setSelected(label)}
          />
        ))}
      </Stack>
    </ChakraProvider>
  );
};
