import { Box, Text, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" py={4}>
      <Container maxW="container.md" centerContent>
        <Text>© {new Date().getFullYear()} VÆRME</Text>
      </Container>
    </Box>
  );
};

export default Footer;
