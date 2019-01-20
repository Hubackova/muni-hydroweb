import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Navigation from "./layout/Navigation";
import HeaderComponent from "./layout/Header";
import FooterContent from "./layout/Footer";
import "./layout.css";

const blueTheme = {
  main: "#0868ac",
  secondary: "#43a2ca",
  terciary: "#a8ddb5",
  grey: "#969696",
  white: "white"
};

const windowGlobal = typeof window !== "undefined" && window;

export default ({ children }) => {
  const isIndex =
    windowGlobal &&
    windowGlobal.location &&
    windowGlobal.location.pathname === "/"
      ? true
      : false;
  return (
    <ThemeProvider theme={blueTheme}>
      <Container className="container">
        <Navigation isIndex={isIndex} />
        {isIndex && <HeaderComponent />}
        <Main>{children}</Main>
        <footer>
          <FooterContent />
        </footer>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`;
