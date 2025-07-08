// src/library/essential-components/Thumbnail.js
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

/**
 * Essential Thumbnail component (Chakra UI version)
 *
 * Props:
 *  • src     – image URL
 *  • alt     – alt text for accessibility
 *  • width   – any Chakra size value (px, %, rem, etc.)
 *  • height  – any Chakra size value
 *  • radius  – border‑radius (sm | md | lg | full | px value)
 *  • ...rest – any other Chakra <Image> props
 */
function Thumbnail({
  src,
  alt,
  width = '100%',
  height = 'auto',
  radius = 'md',
  ...rest
}) {
  return (
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      borderRadius={radius}
      w={width}
      h={height}
      {...rest}
    />
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([
    PropTypes.string, // 'sm', 'md', 'lg', 'full', etc.
    PropTypes.number, // custom pixel radius
  ]),
};

Thumbnail.defaultProps = {
  width: '100%',
  height: 'auto',
  radius: 'md',
};

export default Thumbnail;
