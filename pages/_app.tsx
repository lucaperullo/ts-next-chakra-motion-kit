import Layout from '@/components/layout';

import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';
import { initialState, reducer } from 'src/context/reducer';
import { StateProvider } from 'src/context/stateProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </StateProvider>
  );
};

export default App;
