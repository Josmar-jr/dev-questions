import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { AuthProvider } from 'contexts/AuthContext';
import { global } from 'styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
