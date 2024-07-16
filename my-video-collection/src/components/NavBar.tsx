import {
  Flex,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const displayHamburgerMenu = useBreakpointValue({
    base: "block",
    md: "none",
  });
  const displayLink = useBreakpointValue({ base: "none", md: "block" });

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
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding="1.5rem"
      bg="pink.300"
      justify="space-between"
    >
      <Flex align="center">
        <Box display={displayHamburgerMenu} mr={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Meny"
              bg="pink.300"
              color="white"
              _hover={{ bg: "pink.400" }}
              _active={{ bg: "pink.500" }}
            />
            <MenuList bg="pink.300" color="white">
              <MenuItem
                as="a"
                href="#bildebank"
                bg="pink.300"
                color="white"
                _hover={{ bg: "pink.400", textDecoration: "none" }}
                _focus={{ bg: "pink.500" }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("bildebank");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Bildebank
              </MenuItem>
              <MenuItem
                as="a"
                href="#footer"
                bg="pink.300"
                color="white"
                _hover={{ bg: "pink.400", textDecoration: "none" }}
                _focus={{ bg: "pink.500" }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("footer");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Credit
              </MenuItem>
              {/* Legg til flere menyelementer her hvis nødvendig */}
            </MenuList>
          </Menu>
        </Box>
        <Box display={displayLink} mr={4}>
          <Link
            href="#bildebank"
            fontSize="lg"
            fontWeight="bold"
            color="white"
            onClick={(e) => handleSmoothScroll(e, "bildebank")}
            _hover={{ textDecoration: "none" }}
          >
            Bildebank
          </Link>
          <Link
            href="#footer"
            fontSize="lg"
            fontWeight="bold"
            color="white"
            ml={4}
            onClick={(e) => handleSmoothScroll(e, "footer")}
            _hover={{ textDecoration: "none" }}
          >
            Credit
          </Link>
        </Box>
      </Flex>
      <Box flex="1" textAlign="center">
        <Flex justify="center">
          <Image
            src="/logo/almesus.png"
            alt="Logo"
            boxSize="100px"
            filter="brightness(0) invert(1)"
            width="auto"
            mx="auto"
          />
        </Flex>
      </Box>
      <Box width="100px" display={{ base: "none", md: "block" }} />{" "}
      {/* Dette holder plassen på høyre side på desktop */}
    </Flex>
  );
};

export default NavBar;
