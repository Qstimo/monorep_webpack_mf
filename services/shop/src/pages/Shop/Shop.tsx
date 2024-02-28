import React from 'react'
import cls from './Shop.module.scss'
import {
    Flex,
    Container,
    Image,
    Box,
    useColorMode,
    Heading,
    Text,
} from '@chakra-ui/react'
const Shop = () => {
    return (
        <Box pb={'120px'} as='section'>
            <Box
                color={'gray.50'}
                bg={'purple.600'}
                pt={'90px'}
                pb={"100px"}
                px={'32px'}
            >
                <Container maxW='container.xl'>
                    <Heading textAlign={['left', null, 'center']} fontWeight={'800'} fontSize={['3xl', null, '5xl']}>
                        Lorem ipsum dolor sit amet.
                    </Heading>
                    <Text fontWeight={'500'} fontSize={['lg', null, '2xl']} pt={'4'}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus explicabo molestias dicta quidem architecto beatae, distinctio atque sed laborum voluptates saepe natus, delectus fuga. Voluptas similique quo blanditiis perferendis.
                    </Text>
                </Container>


            </Box>
        </Box>

    )
}
export default Shop