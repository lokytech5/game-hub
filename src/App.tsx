import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar/>
      </GridItem>
      <Show above='lg'>
      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App
