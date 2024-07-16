import { Flex, Box, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding="1.5rem"
      bg="pink.300"
    >
      <Box>
        <Heading
          as="h1"
          size="2xl" // For å gjøre teksten større
          fontWeight="bold" // For å gjøre teksten fetere
          textAlign="center"
          color="white" // For å gjøre teksten hvit
          textShadow="2px 2px #000" // For å legge til skyggeeffekt
        >
          Marentius Videosamling
        </Heading>
      </Box>
    </Flex>
  );
};

export default NavBar;
