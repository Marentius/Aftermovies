import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const bgColor = useColorModeValue("gray.800", "gray.900");

  return (
    <Box
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      mb={4}
      mx="auto"
      bg={bgColor}
      p={0}
      boxShadow="xl"
    >
      <video width="100%" controls style={{ display: "block", height: "auto" }}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer;
