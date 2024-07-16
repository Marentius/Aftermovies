import { Box, Text, Container, Link } from "@chakra-ui/react";

const Footer = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box as="footer" bg="black" color="white" py={4} id="footer">
      <Container maxW="container.md" centerContent>
        <Link
          marginBottom={5}
          href="#top"
          color="white"
          onClick={(e) => handleSmoothScroll(e, "top")}
          _hover={{ textDecoration: "none" }}
        >
          Til toppen
        </Link>
        <Text marginBottom={5}>Produsert av Vetle Marentius Nilsen</Text>
        <Text>© {new Date().getFullYear()} VÆRME</Text>
      </Container>
    </Box>
  );
};

export default Footer;
