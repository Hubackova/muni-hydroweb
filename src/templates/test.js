import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import H2 from "../components/atoms/H2";
import StyledLink from "../components/atoms/StyledLink";

const Test = () => {
  return (
    <Layout>
      <NarrowContainer>
        <H2>test</H2>
      </NarrowContainer>
    </Layout>
  );
};

const NarrowContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.mediumDevice}) {
    width: 100%;
  }
`;
export default Test;
