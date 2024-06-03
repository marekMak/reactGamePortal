import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

import { Grid, GridItem, Show } from '@chakra-ui/react'
import GamesGrid from './components/GamesGrid';


function App() {
  return (
    <>
    <Grid templateAreas={{
      base:`"nav nav" "aside main"`,
      lg:`"nav nav" "aside main"`
      }}>
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">Aside</GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <GamesGrid/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App
