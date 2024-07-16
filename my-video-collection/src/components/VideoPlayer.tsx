import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface VideoPlayerProps {
  src: string;
  comment?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, comment }) => {
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
      width="100%"
      maxWidth="800px"
    >
      <video
        width="100%"
        controls
        style={{ display: "block", height: "auto" }}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {comment && (
        <Box p={4} bg="gray.700" color="white">
          <Text>{comment}</Text>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
