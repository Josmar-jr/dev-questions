import { components } from './components';
import { fonts } from './fonts';
import { colors } from './colors';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  initialColorMode: 'dark',
  fonts,
  colors,
  components,
});
