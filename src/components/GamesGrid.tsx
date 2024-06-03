import React, { useState, useEffect } from 'react'
import useGames from '../hooks/gameHook';

import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react';

const GamesGrid = () => {

    const {games, err} = useGames();
  

  return (
    <div>
        <ul>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4  }} spacing={10} padding={'10'}> 
            {games.map((game)=>(
                <GameCard key={game.id} game={game}/>
            ))}
            </SimpleGrid>
        </ul>
    </div>
  )
}

export default GamesGrid