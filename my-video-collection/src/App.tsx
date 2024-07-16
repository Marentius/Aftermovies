import React from "react";
import { VStack, useColorModeValue, Flex } from "@chakra-ui/react";
import VideoPlayer from "./components/VideoPlayer";
import { videos } from "./video";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery"; // Importer ImageGallery

const App: React.FC = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, green.100, yellow.100)", // Juster disse fargene til grønn og gul
    "linear(to-r, green.300, yellow.300)" // Mørkere versjon for mørk modus om nødvendig
  );

  return (
    <Flex direction="column" minH="100vh" bgGradient={bgGradient} id="top">
      <NavBar />
      <Flex flexGrow={1} justifyContent="center" alignItems="center" p={8}>
        <VStack spacing={4}>
          {videos.map((video, index) => (
            <VideoPlayer key={index} src={video.src} />
          ))}
        </VStack>
      </Flex>
      <ImageGallery /> {/* Legg til ImageGallery her */}
      <Footer />
    </Flex>
  );
};

export default App;
