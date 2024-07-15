import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import VideoPlayer from "./components/VideoPlayer";
import { videos } from "./video";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const bgGradient = useColorModeValue(
    "linear(to-r, green.100, yellow.100)", // Juster disse fargene til grønn og gul
    "linear(to-r, green.300, yellow.300)" // Mørkere versjon for mørk modus om nødvendig
  );

  return (
    <Flex direction="column" minH="100vh" bgGradient={bgGradient}>
      {" "}
      <NavBar />
      <Container as="main" maxW="container.md" flexGrow={1} p={8}>
        {" "}
        <VStack spacing={4}>
          <VideoPlayer src={videos[currentVideoIndex].src} />
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default App;
