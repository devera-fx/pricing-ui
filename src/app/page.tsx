'use client';
import { ChakraProvider, Heading, Text } from "@chakra-ui/react"
import Features from "./Features";
import Header from "./Header";
import CheckMarkIcon from "./icons/checkMarkIcon";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
