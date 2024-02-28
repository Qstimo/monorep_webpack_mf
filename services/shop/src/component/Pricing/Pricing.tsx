import { Box, Button, Container, Flex, HStack, Heading, Stack, StackProps, Text } from '@chakra-ui/react'
import React from 'react'
interface PricingProps {
    className?: string
}
export const ListItem = ({ children }: StackProps) => {
    return (
        <HStack as={'li'} spacing={'20px'}>
            <Text>{children}</Text>
        </HStack>
    )
}

export const Pricing = ({ className }: PricingProps) => {
    return (
        <Box mx={6}>
            <Box overflow={'hidden'} borderRadius={'xl'} maxW={'974px'} margin={'auto'} mt={'-48'}>
                <Flex direction={['column', null, 'row']}>
                    <Box textAlign={['center', null, 'left']} bg={'gray.100'} p='14'>
                        <Text fontSize={'2xl'} fontWeight={'800'}>
                            Premium Pro
                        </Text>
                        <Heading as={'h3'} fontSize={['4xl', null, '6xl']} mt={'4'}>
                            $329
                        </Heading>
                        <Text color={'gray.800'} fontSize={'lg'} mt={'2'} fontWeight={'500'}>Lorem, ipsum dolor.</Text>
                        <Button mt={'6'} colorScheme={'purple'} size={'lg'} w={'72'}>Get Started</Button>
                    </Box>
                    <Box textAlign={['center', null, 'left']} flexGrow={'1'} bg={'white'} p={'16'} fontSize={'lg'} >
                        <Text fontSize={'xl'} fontWeight={'bold'} >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
                        <Stack spacing={'5'} as={'ul'} pt={'6'}>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box >
        </Box>
    )
}