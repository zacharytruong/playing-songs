import { extendTheme } from '@chakra-ui/react';

import Button from './components/Button';
import Input from './components/Input';
import { colors } from './foundation/colors';
import {
  borderRadius,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  spacing,
  themeConfig,
  zIndices
} from './foundation/config';
import styles from './styles';

const overrides = {
  colors,
  borderRadius,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  sizes,
  spacing,
  themeConfig,
  zIndices,
  styles,
  components: {
    Button,
    Input
  }
};

const theme = extendTheme(overrides);

export default theme;
