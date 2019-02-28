import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Test = ({ data }) => {
  if (!data && !data.markdownRemark) return <div>...loading</div>;
  const { markdownRemark } = data;

  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.name}</h1>
      <div>Práce: {markdownRemark.frontmatter.thesis}</div>
      <div>Školitel: {markdownRemark.frontmatter.supervisor}</div>
      <div>email: {markdownRemark.frontmatter.email}</div>
      <div>telefon: {markdownRemark.frontmatter.phone}</div>
      <div>místnost: {markdownRemark.frontmatter.room}</div>
      <div>IS: {markdownRemark.frontmatter.is}</div>
      <div>ResearchGate: {markdownRemark.frontmatter.rg}</div>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  );
};

export default Test;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
      }
    }
  }
`;
