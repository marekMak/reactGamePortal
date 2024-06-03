import React from 'react'
import {Game} from '../hooks/gameHook'
import { Card, CardBody, Image, Heading, Text } from '@chakra-ui/react'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={0} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)}
        </CardBody>
    </Card>
  )
}

export default GameCard