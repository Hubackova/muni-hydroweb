import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout";

const Courses = ({ data }) => {
  if (!data && !data.markdownRemark) return <div>...loading</div>;
  const { markdownRemark: courses } = data;

  return (
    <Layout>
    <Container>
      <h1> Předměty </h1>
      <div>
      <div dangerouslySetInnerHTML={{ __html: courses.html }} />
    </div>
    </Container>
  </Layout>

  );
};

export default Courses;

export const coursesQuery = graphql`
  query coursesQuery {
    markdownRemark(frontmatter: { title: { eq: "courses" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const A = styled.a`
  color: #333;
`;
