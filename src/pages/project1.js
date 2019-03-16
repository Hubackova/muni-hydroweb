import React from "react";
import ProjectDetail from "../components/ProjectDetail";

export default ({ data }) => <ProjectDetail data={data} />;

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/project1_/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "project1" } }) {
      html
      frontmatter {
        title
        name
        image
      }
    }
  }
`;
