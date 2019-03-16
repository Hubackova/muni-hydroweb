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
  lightblue: "#46acc2;",
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
    const isWide=
    windowGlobal &&
    windowGlobal.location &&
    windowGlobal.location.pathname.includes("project")
      ? true
      : false;
  return (
    <ThemeProvider theme={blueTheme}>
      <Container>

        <HeaderPanel>
          <Navigation isIndex={isIndex} />
          <HeaderComponent />
        </HeaderPanel>

        <Main isWide={isWide} isIndex={isIndex}> {children}</Main>

        <footer>
          <FooterContent />
        </footer>

      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderPanel = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.main};
`;

const Main = styled.main`
  max-width: ${props => props.isWide ? "100%" : "1366px"};
  margin: 0 auto;
  width: 100%;
  flex: 1;
  margin-top: ${props => props.isIndex ? "0px" : "20px"};
  @media (max-width: 1386px) {
    padding: 0 20px ;
  }
`;


