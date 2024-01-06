import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme
} from '@chakra-ui/react';

import Button from './components/Button';
import { bodyGradient, colors } from './foundation/colors';

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const styles = {
  global: {
    body: {
      bgGradient: bodyGradient
    }
  }
};

const overrides = {
  colors,
  styles,
  themeConfig,
  components: {
    Button
  }
};

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: 'brand' })
);

export default theme;
