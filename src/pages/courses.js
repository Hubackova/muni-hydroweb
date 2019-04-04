import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

const Courses = ({ data }) => (
  <Layout>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Content>
  </Layout>
);

export default Courses;

export const coursesQuery = graphql`
  query coursesQuery {
    markdownRemark(frontmatter: { title: { eq: "courses" } }) {
      html
    }
  }
`;
const Content = styled.div`
  margin: 20px;
  @media (max-width: 800px) {
    margin: 0 10px;
  }
`;
