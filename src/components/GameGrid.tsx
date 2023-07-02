import { Text } from '@chakra-ui/react';
import useGames from './hooks/useGames';

function GameGrid() {
   const {game, error} = useGames()
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