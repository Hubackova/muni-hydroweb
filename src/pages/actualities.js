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
        {({ int }) => (
          <>
            <Title>
              {int === "en" ? "Highlights Archive" : "Archiv zajímavostí"}
            </Title>
            {reverserd.map(({ node }) => {
              const img = data.allImageSharp.edges.find((img) =>
                img.node.fixed.src.includes(`${node.frontmatter.title}`)
              );

              return (
                <Actuality key={node.id} class={int}>
                  {img ? <Img fixed={img.node.fixed} /> : <div />}
                  <div
                    className={`project-body ${int}`}
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </Actuality>
              );
            })}
          </>
        )}
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
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
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
  font-size: 16px;

  > div:first-of-type {
    min-width: 150px;
    width: 150px;
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
const Title = styled.h3`
  border-bottom: 1px solid grey;
  font-weight: 400;
`;
