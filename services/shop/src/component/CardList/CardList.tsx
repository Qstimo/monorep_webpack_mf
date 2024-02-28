import React from 'react'
import cls from './CardList.module.scss'
import { Box, Button, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'

export const CardList = (props: any) => {
    const { cards = [] } = props
    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="4">
            {cards.map((card: any) => (
                <Stack p="4" spacing={2} key={card.title} _hover={{ shadow: 'md' }}>
                    <Heading isTruncated py={'3'} as={'h3'}>{card.title}</Heading>
                    <Text py={'3'}>{card.body}</Text>
                    <Button variant='outline' colorScheme={'brand'} as={'a'}>
                        Read more
                    </Button>
                </Stack>
            ))}
        </SimpleGrid>
    )
}