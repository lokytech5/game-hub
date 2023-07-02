import React from 'react'
import { Game } from './hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatfromIconList from './PlatfromIconList'
import CriticsScore from './CriticsScore'

interface Props {
   game: Game
}

function GameCard({ game }: Props) {
  return (
   <Card borderRadius={10} overflow='hidden'>
    <Image src={game.background_image}/>
    <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatfromIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticsScore score={game.metacritic}/>
        </HStack>
    </CardBody>
   </Card>
  )
}

export default GameCard