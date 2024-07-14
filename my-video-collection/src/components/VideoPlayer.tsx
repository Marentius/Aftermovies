import React from "react";
import { Box, Text, Button, useColorModeValue } from "@chakra-ui/react";

interface VideoPlayerProps {
  src: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("black", "gray.300");

  return (
    <Box
      maxW="800px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={4}
      mx="auto"
      bg={bgColor}
      color="white"
      p={4}
    >
      <Box p="6">
        <Text
          fontSize="lg"
          fontWeight="bold"
          color={textColor}
          textAlign="center"
          mb={4}
        >
          {title}
        </Text>
        <Button
          as="a"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="blue"
          w="100%"
        >
          Klikk for å se videon❤️
        </Button>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
