import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { IntContextConsumer } from "../components/Context";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import "font-awesome/css/font-awesome.min.css";

const Homepage = ({ data }) => {
  return (
  <Layout>
    <SEO />
    <Container>
    <IntContextConsumer>
        {({ int }) => (
          <>
          <h1>{int === "en" ? data.markdownRemark.frontmatter.nameEn : data.markdownRemark.frontmatter.nameCz }</h1>
          <div className={int}><div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /></div>
          </>
        )}
      </IntContextConsumer>
    </Container>
  </Layout>
)};
export default Homepage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "homepage" } }) {
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
