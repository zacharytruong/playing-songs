import { defineStyleConfig } from '@chakra-ui/react';

import { bgGradient, reversedBgGradient } from '@/theme/foundation/colors';

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: 'base' // <-- border radius is same for all variants and sizes
  },

  // Two variants: outline and solid
  variants: {
    outline: {
      bgGradient,
      borderColor: 'white',
      color: 'white',
      _hover: {
        bgGradient: reversedBgGradient,
        transition: 'all 0.75s ease'
      },
      _active: {
        bgGradient: bgGradient,
        transition: 'all 0.75s ease'
      }
    },
    solid: {
      color: 'white',
      bgGradient,
      _hover: {
        bgGradient: reversedBgGradient,
        transition: 'all 0.75s ease'
      },
      _active: {
        bgGradient,
        transition: 'all 0.75s ease'
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
