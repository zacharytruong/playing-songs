import { defineStyleConfig } from '@chakra-ui/react';

import { bgGradient } from '@/theme/foundation/colors';

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base' // <-- border radius is same for all variants and sizes
  },

  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      bgGradient,
      borderColor: 'white',
      color: 'white',
      _hover: {
        bgGradient,
        opacity: 0.75
      }
    },
    solid: {
      bg: 'brand.500',
      bgGradient,
      borderColor: 'white',
      color: 'white',
      _hover: {
        bgGradient,
        opacity: 0.75
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline'
  }
});

export default Button;
