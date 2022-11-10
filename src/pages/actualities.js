import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { IntContextConsumer } from "../components/Context";
import Img from "gatsby-image";
import styled from "styled-components";

const Actualities = ({ data }) => {
  const reverserd = data.allMarkdownRemark.edges.sort((a, b) =>
    a.node.frontmatter.title < b.node.frontmatter.title ? 1 : -1
  );
  return (
    <Layout>
      <IntContextConsumer>
        {({ int }) =>
          reverserd.map(({ node }) => {
            const img = data.allImageSharp.edges.find((img) =>
              img.node.fluid.src.includes(`${node.frontmatter.title}`)
            );

            return (
              <Actuality key={node.id} class={int}>
                {img ? <Img fluid={img.node.fluid} /> : <div />}
                <div
                  className={`project-body ${int}`}
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </Actuality>
            );
          })
        }
      </IntContextConsumer>
    </Layout>
  );
};

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/large-news_/" } } }) {
      edges {
        node {
          id
          fluid {
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
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Actualities;

const Actuality = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  padding-bottom: 2em;

  > div:first-of-type {
    max-width: 250px;
    width: 250px;
    flex-shrink: 0;
  }

  p:first-of-type {
    color: ${(props) => props.theme.lightblue};
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 0.08em solid rgb(229, 229, 229);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
