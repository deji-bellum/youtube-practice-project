import React from 'react';
import PropTypes from 'prop-types';
import { Button as ChakraButton } from '@chakra-ui/react';

/**
 * Essential Button – the one source of truth for all buttons.
 * Props are forwarded directly to Chakra’s <Button>.
 */
function Button({
  colorScheme = 'blue',
  variant = 'solid',
  size = 'md',
  onClick,
  children,
  ...rest
}) {
  return (
    <ChakraButton
      colorScheme={colorScheme}   // ✅ this is what Storybook controls
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
