import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { IntContextConsumer } from "../components/Context";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import Actualities from "../components/Actualities";
import "font-awesome/css/font-awesome.min.css";

const Homepage = ({ data }) => {
  return (
    <Layout>
      <SEO />

      <IntContextConsumer>
        {({ int }) => (
          <Home>
            <Text>
              <h1>
                {int === "en"
                  ? data.markdownRemark.frontmatter.nameEn
                  : data.markdownRemark.frontmatter.nameCz}
              </h1>
              <div className={int}>
                <div
                  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
              </div>
            </Text>
            <ActualitiesWrapper>
              <Actualities imgs={data.allImageSharp.edges} int={int} />
            </ActualitiesWrapper>
          </Home>
        )}
      </IntContextConsumer>
    </Layout>
  );
};
export default Homepage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "homepage" } }) {
      html
      frontmatter {
        name
      }
    }

    allImageSharp(filter: { fluid: { src: { regex: "/small-news_/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/actualities/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const Home = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  flex: 2;

  p {
    padding-left: 2em;
    padding-right: 2em;
    text-align: justify;
    max-width: 1160px;
    margin-left: auto;
  }
`;

const ActualitiesWrapper = styled.div`
  flex: 1;
`;
