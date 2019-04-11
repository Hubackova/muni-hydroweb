import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PersonBox from "../components/personBox";
import Note from "../components/atoms/Note";
import { IntContextConsumer } from "../components/Context";

export default ({ data }) => {
  return (
    <Layout>
      <IntContextConsumer>
        {({ int }) => (
          <div className={int}>
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                const img = data.allImageSharp.edges.find(img =>
                  img.node.fluid.src.includes(node.frontmatter.title)
                );
                return (
                  <IntContextConsumer>
                    {({ int }) => (
                      <PersonBox
                        personInfo={node.frontmatter}
                        int={int}
                        key={node.id}
                        isStudent={false}
                        linkTo={node.fields.slug}
                        fluid={img && img.node.fluid}
                      />
                    )}
                  </IntContextConsumer>
                );
              })}
            </div>
            <Note>* {int==="en" ? "Maternity leave" : "Mateřská dovolená"}</Note>
          </div>
        )}
      </IntContextConsumer>
    </Layout>
  );
};

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/staff_/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/staff/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            name
            position
            positionEn
            email
            phone
            room
            is
            rg
            image
            order
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
