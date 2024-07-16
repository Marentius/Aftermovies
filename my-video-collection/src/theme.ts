import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "black",
      },
      "*::placeholder": {
        color: "gray.400",
      },
      "*, *::before, *::after": {
        borderColor: "gray.200",
        wordWrap: "break-word",
      },
    },
  },
});

export default theme;
