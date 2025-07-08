// src/stories/Thumbnail.stories.js

import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Thumbnail from '../library/essential-components/Thumbnail';

export default {
  title: 'EssentialComponents/Thumbnail',
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300x200.png?text=Default+Thumbnail',
  alt: 'Default Thumbnail',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://via.placeholder.com/150x100.png?text=Custom+Size',
  alt: 'Custom size thumbnail',
  width: '150px',
  height: '100px',
};

export const RoundedFull = Template.bind({});
RoundedFull.args = {
  src: 'https://via.placeholder.com/200.png?text=Rounded+Full',
  alt: 'Rounded full thumbnail',
  radius: 'full',
  width: '200px',
  height: '200px',
};

export const WithBoxShadow = Template.bind({});
WithBoxShadow.args = {
  src: 'https://via.placeholder.com/250x150.png?text=Shadow',
  alt: 'Thumbnail with shadow',
  width: '250px',
  height: '150px',
  shadow: 'md',
};
