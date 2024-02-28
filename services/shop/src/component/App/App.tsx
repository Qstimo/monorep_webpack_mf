import React from 'react'
import cls from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import { Shop } from '@/pages/Shop'

import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
    Container,
    Box,
    Heading,
    Text,
    Divider,
    extendTheme,
} from '@chakra-ui/react'
import { CardList } from '../CardList/CardList'
import { Pricing } from '../Pricing/Pricing'
import { FormSub } from '../Form/Form'
import { FormBasic } from '../Form/FormBase'
const cards = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
{
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
},
{
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
},]
const { Button } = chakraTheme.components

const theme = extendTheme({
    colors: {
        brand: {
            100: 'red',
            200: 'red',
            300: 'red',
            400: 'red',
            500: 'brown',
            600: 'brown',
            700: 'brown',

        }
    },
    component: {
        Button: {
            variants: {
                brand: (props: { colorMode: any }) => ({
                    bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.700',
                    color: 'white',
                    _hover: {
                        bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.300',
                    }
                })
            }
        }
    }
})

export const App = () => {
    return (
        <ChakraBaseProvider theme={theme}>
            <Shop />
            <Pricing />
            <FormSub />
            <FormBasic />
            <Container maxW='container.xl'>
                <Box >
                    <Heading py={2} size='4xl'>
                        Chakraxd
                    </Heading>
                    <Text fontSize={'l'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum ea aspernatur optio, cupiditate laborum blanditiis autem libero sint recusandae dolorem quidem ipsam doloribus placeat atque corporis, accusantium accusamus! Voluptate.</Text>
                </Box>
                <Divider />
                <CardList cards={cards} />
            </Container>
        </ChakraBaseProvider>
    )
}