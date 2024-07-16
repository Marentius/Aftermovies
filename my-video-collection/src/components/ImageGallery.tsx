import React from "react";
import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";
import { images } from "../image";

const ImageGallery: React.FC = () => {
  return (
    <Box p={8} id="bildebank">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        SER DU DEG SELV?
      </Heading>
      <Text fontSize="lg" mb={8} textAlign="center">
        Under ser du bilder fra Almesus 2024
      </Text>

      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={4}>
        {images.map((image, index) => (
          <Box key={index} overflow="hidden" borderRadius="md">
            <Image
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              width="100%"
            />
          </Box>
        ))}
      </SimpleGrid>
      <Text fontSize="lg" mb={8} textAlign="center">
        Under produksjon. Flere bilder kommer..
      </Text>
    </Box>
  );
};

export default ImageGallery;
