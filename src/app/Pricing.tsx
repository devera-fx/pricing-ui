import { Box, Button, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import CheckMarkIcon from './icons/checkMarkIcon'
export default function Pricing() {
    return (
        <Box
            maxW={"900px"}
            mx={{ base: "20px", lg: 'auto' }}
            mt="-150px"
            bg="white"
            borderRadius={"12px"}
            overflow={"hidden"}
            boxShadow={
                "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }
        >
            <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
                <Box bg={"#bbb3cd"} p={"30px"} textAlign={"center"}>
                    <Text fontSize={"24px"} fontWeight={"bold"}>
                        Premium PRO
                    </Text>
                    <Heading fontSize={"60px"}>$329</Heading>
                    <Text>billed just once</Text>
                    <Button color={"white"} bg={"#805AD5"} w={"280px"} mt={"20px"}>
                        Get Started
                    </Button>
                </Box>
                <Box pt={"45px"} pl={"30px"} pr="10px">
                    <Text mb={"15px"}>Access these features when you get this pricing package for your business.</Text>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text>24/7 support and consulting</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}
