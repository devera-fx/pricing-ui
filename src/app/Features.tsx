import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icon3 from './icons/icon3'

export default function Features() {
    return (
        <Box maxW={"650px"} m="auto" mt="25px" px="15px">
            <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
                <HStack>
                    <Icon as={icon1}></Icon>
                    <Text fontSize={16}>30 days money back Guarantee</Text>
                </HStack>
                <HStack>
                    <Icon as={icon2}></Icon>
                    <Text fontSize={16}>No setup fees
                        100% hassle-free</Text>
                </HStack>
                <HStack>
                    <Icon as={icon3}></Icon>
                    <Text fontSize={16}>No monthly subscription
                        Pay once and for all</Text>
                </HStack>
            </Flex>
        </Box>
    )
}
