import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

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
        <Image
          src="/logo/logo.png"
          alt="Logo"
          boxSize="100px"
          filter="brightness(0) invert(1)"
          width="auto"
        />
      </Box>
    </Flex>
  );
};

export default NavBar;
