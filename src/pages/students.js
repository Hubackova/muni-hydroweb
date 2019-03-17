import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PersonBox from "../components/personBox";
import Note from "../components/atoms/Note";

export default ({ data }) => {
  const students = data.markdownRemark.html;
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const img = data.allImageSharp.edges.find(img =>
            img.node.fluid.src.includes(node.frontmatter.title)
          );
          return (
            <PersonBox
              personInfo={node.frontmatter}
              key={node.id}
              isStudent={true}
              linkTo={node.fields.slug}
              fluid={img.node.fluid}
            />
          );
        })}
      </div>
      <Note>* Mateřská dovolená</Note>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: students }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "mgrBc" } }) {
      id
      html
    }

    allImageSharp(filter: { fluid: { src: { regex: "/phd_/" } } }) {
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
      filter: { fields: { slug: { regex: "/students/" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            name
            thesis
            supervisor
            email
            phone
            room
            is
            rg
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
