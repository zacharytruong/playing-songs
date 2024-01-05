import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {},

  // Two variants: outline and solid
  variants: {
    outline: {},
    unstyled: {},
    flushed: {},
    filled: {}
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline'
  }
});

export default Input;
