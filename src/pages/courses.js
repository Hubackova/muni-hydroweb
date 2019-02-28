import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

const Courses = ({ data }) => {
  if (!data && !data.allMarkdownRemark) return <div>...loading</div>;
  const { allMarkdownRemark } = data;
  const courses1 = allMarkdownRemark.edges[0].node;
  const courses2 = allMarkdownRemark.edges[1].node;

  return (
    <Layout>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: courses1.html }} />
        <div dangerouslySetInnerHTML={{ __html: courses2.html }} />
      </Container>
    </Layout>
  );
};

export default Courses;

export const coursesQuery = graphql`
  query coursesQuery {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  div {
    max-width: 40%;
  }
`;

const A = styled.a`
  color: #333;
`;
