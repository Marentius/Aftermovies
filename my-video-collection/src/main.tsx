import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme"; // Importer det tilpassede temaet

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {" "}
      {/* Bruk det tilpassede temaet */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
