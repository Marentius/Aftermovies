import React, { useState, useRef } from "react";
import { Box, Heading, Text, useColorModeValue, Image } from "@chakra-ui/react";

interface VideoPlayerProps {
  src: string;
  comment?: string;
  placeholder: string; // Add a new prop for the placeholder image
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  comment,
  placeholder,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgColor = useColorModeValue("gray.800", "gray.900");

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Heading>Aftermovie</Heading>
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
        position="relative"
      >
        {!isPlaying && (
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="black"
            opacity="0.7"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex="1"
            cursor="pointer"
            onClick={handlePlay}
          >
            <Image
              src={placeholder}
              alt="Play button"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        )}
        <video
          ref={videoRef}
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
    </>
  );
};

export default VideoPlayer;
