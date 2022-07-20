import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				bg: 'rgb(255, 220, 200)',
				boxShadow: 'inset 0 0 30px 10px rgba(0, 0, 0, 0.1)'
			}
		})
	}
});
