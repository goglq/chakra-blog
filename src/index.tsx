import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import { theme } from './theme';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
