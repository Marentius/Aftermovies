import React, { useState } from "react";
import { Container, VStack, useColorModeValue, Flex } from "@chakra-ui/react";
import VideoPlayer from "./components/VideoPlayer";
import { videos } from "./video";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [currentVideoIndex] = useState(0);

  const bgGradient = useColorModeValue(
    "linear(to-r, green.100, yellow.100)", // Juster disse fargene til grønn og gul
    "linear(to-r, green.300, yellow.300)" // Mørkere versjon for mørk modus om nødvendig
  );

  return (
    <Flex direction="column" minH="100vh" bgGradient={bgGradient}>
      <NavBar />
      <Flex flexGrow={1} justifyContent="center" alignItems="center" p={8}>
        <VStack spacing={4}>
          <VideoPlayer
            src={videos[currentVideoIndex].src}
            comment={videos[currentVideoIndex].comment}
          />
        </VStack>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default App;
