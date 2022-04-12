import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { IntContextConsumer } from "../components/Context";
import Layout from "../components/layout";

const Teaching = ({ data }) => (
  <Layout>
    <Content>
      {data?.markdownRemark && (
        <IntContextConsumer>
          {({ int }) => (
            <div className={int}>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </div>
          )}
        </IntContextConsumer>
      )}
    </Content>
  </Layout>
);

export const query = graphql`
  query {
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

export default Teaching;
