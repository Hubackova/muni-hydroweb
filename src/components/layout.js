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
      <Container>
        <HeaderPanel>
          <Navigation isIndex={isIndex} />
          {<HeaderComponent />}
        </HeaderPanel>

        <Main>{children}</Main>

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
  align-items: center;
 min-height: 100vh;
`;

const HeaderPanel = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.main};
`;

const Main = styled.main`
  max-width: 1366px;
  width: 100%;
  flex: 1;
`;


