// src/library/essential-components/SidebarItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from '@chakra-ui/react';

function SidebarItem({ icon, label, isActive, onClick, ...rest }) {
  return (
    <Flex
      align="center"
      gap={4}
      px={4}
      py={2}
      cursor="pointer"
      bg={isActive ? 'gray.200' : 'transparent'}
      fontWeight={isActive ? 'semibold' : 'normal'}
      _hover={{ bg: 'gray.100' }}
      onClick={onClick}
      {...rest}
    >
      <Box fontSize="xl">{icon}</Box>
      <Text fontSize="sm">{label}</Text>
    </Flex>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

SidebarItem.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default SidebarItem;
