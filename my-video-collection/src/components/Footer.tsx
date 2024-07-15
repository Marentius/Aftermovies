import { Box, Text, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" py={4}>
      <Container maxW="container.md" centerContent>
        <Text>
          © {new Date().getFullYear()} Ditt Firmanavn - Alle rettigheter
          reservert.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
