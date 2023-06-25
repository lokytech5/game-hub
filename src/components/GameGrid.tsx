import React, { useEffect, useState } from 'react'
import apiClient from './services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}
function GameGrid() {
    const [game, setGame] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
                 .then(response => setGame(response.data.results))
                 .catch(error => error.message)
    })
  return (
    <>
    {error && <Text> {error}</Text>}
   <ul> 
    {game.map(game => <li key={game.id}>{game.name}</li>)}
   </ul>  
    </>
  )
}

export default GameGrid