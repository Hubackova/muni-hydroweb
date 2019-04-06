import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { IntContextConsumer } from "../components/Context";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import "font-awesome/css/font-awesome.min.css";

const Homepage = ({ data }) => {
  console.log(data)
  if (!data.cz || !data.en) return <span>"loading"</span>
debugger
  return (
  <Layout>
    <SEO />
    <Container>
    <IntContextConsumer>
        {({ int }) => (
          <>
          <h1>{int === "en" ? data.en.frontmatter.name : data.cz.frontmatter.name }</h1>
          <div dangerouslySetInnerHTML={{ __html: int === "en" ? data.en.html : data.cz.html }} />
          </>
        )}
      </IntContextConsumer>
    </Container>
  </Layout>
)};
export default Homepage;

export const query = graphql`
  query {
    cz: markdownRemark(frontmatter: { title: { eq: "homepageCz" } }) {
      html
      frontmatter {
        name
      }
    }
    en: markdownRemark(frontmatter: { title: { eq: "homepageEn" } }) {
      html
      frontmatter {
        name
      }
    }
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  p {
    text-align: justify;
  }
`;
