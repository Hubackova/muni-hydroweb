import React from "react";
import ProjectDetail from "../components/ProjectDetail";

export default ({ data }) => <ProjectDetail data={data} />;
export const query = graphql`
  query {
    allImageSharp(filter: {fluid: {src: {regex: "/project2_/"}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 3872) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    markdownRemark(frontmatter: {title: {eq: "project2"}}) {
      html
      frontmatter {
        title
        name
        image
      }
    }
  }
`
