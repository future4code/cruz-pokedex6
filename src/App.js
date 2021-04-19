import React from 'react'
import PagesNavigation from './PagesNavigation/PagesNavigation'
import { ThemeProvider } from '@material-ui/core/styles';
//import { useTheme } from '@material-ui/core/styles';
//import {theme} from './components/Theme'
import { createMuiTheme } from '@material-ui/core/styles';


export default function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: '#757ce8',
        // main: '#d9534f',
        main: '#e91f2a',
        // dark: '#002884',
        // contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return( 
  <ThemeProvider theme={theme}>
    <PagesNavigation />
  </ThemeProvider>
  );
}
