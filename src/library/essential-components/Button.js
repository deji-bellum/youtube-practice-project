// src/library/essential-components/Button.js

import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

function Button({ colorScheme = 'blue', variant = 'solid', size = 'md', onClick, children, ...rest }) {
  return (
    <ChakraButton
      colorScheme={colorScheme}
      variant={variant}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}

Button.propTypes = {
  colorScheme: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline', 'ghost', 'link', 'unstyled']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  colorScheme: 'blue',
  variant: 'solid',
  size: 'md',
  onClick: () => {},
};

export default Button;
