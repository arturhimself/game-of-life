import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { NormalizeStyles } from '@/global-styles';
import { Header } from '@/components';
import { Home } from '@/pages';

const theme = {
	colors: {
		primary: '#265F25',
	}
};

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
			<NormalizeStyles />
			<Header />
			<Home />
    </ThemeProvider>
  );
};

export { App };
