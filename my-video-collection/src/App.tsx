import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import VideoPlayer from "./components/VideoPlayer";
import { videos } from "./video";

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.300, gray.400, gray.500)", // Light mode gradient
    "linear(to-r, gray.900, black, gray.900)" // Dark mode gradient
  );

  return (
    <Box bgGradient={bgGradient} minH="100vh">
      <Container maxW="container.md" centerContent p={4}>
        <Flex w="100%" align="center" mb={8}>
          <Heading
            as="h1"
            size="2xl"
            color="white"
            textAlign="center"
            textShadow="2px 2px #000"
          >
            Vetles Videosamling😎
          </Heading>
          <Spacer />
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <VStack spacing={4} w="100%">
          {videos.map((video, index) => {
            const videoProps =
              video.title === "Almesus 2024 versjon 1"
                ? {
                    key: index,
                    src: video.src,
                    title: video.title,
                    comment: "Kun siste 1,5-2min som er endret",
                  }
                : { key: index, src: video.src, title: video.title };
            return <VideoPlayer {...videoProps} />;
          })}
        </VStack>
      </Container>
    </Box>
  );
};

export default App;
