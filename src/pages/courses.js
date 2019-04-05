import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { IntContextConsumer } from "../components/Context";
import Layout from "../components/layout";

const Courses = ({ data }) => (
  <Layout>
    <Content>
      <IntContextConsumer>
        {({ int }) => (
          <div dangerouslySetInnerHTML={{ __html: int === "en" ? data.en.html : data.cz.html }} />

        )}
      </IntContextConsumer>
    </Content>
  </Layout>
);

export default Courses;

export const query = graphql`
  query {
    cz: markdownRemark(frontmatter: { title: { eq: "coursesCz" } }) {
      html
    }
    en: markdownRemark(frontmatter: { title: { eq: "coursesEn" } }) {
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
