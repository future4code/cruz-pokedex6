import React from 'react'
import PagesNavigation from './PagesNavigation/PagesNavigation'
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import PokemonProvider from './global/PokemonProvider';


export default function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e91f2a',
      },
    },
  });
  return (
    <PokemonProvider>
      <ThemeProvider theme={theme}>
        <PagesNavigation />
      </ThemeProvider>
    </PokemonProvider>
  )
}
