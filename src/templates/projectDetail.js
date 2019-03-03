import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/layout";
import H2 from "../components/atoms/H2";



export default ({ data }) => {
  const {markdownRemark} = data
  return (
  <Layout>
  <NarrowContainer>
    <h1>{markdownRemark.frontmatter.name}</h1>
    <Content dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
    <StyledLink to="/projects/">
      <i className="fa fa-arrow-left" />
    </StyledLink>
  </NarrowContainer>
</Layout>
)};

const NarrowContainer = styled.div`
  margin: 10px auto;
`
const Content = styled.div`
  @media (max-width: 1386px) {
    margin: 0 20px ;
  }
`
//todo: similar with staff
const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

export const query = graphql`
  query($slug: String!, $imgname: String!) {
    file(relativePath: {regex: $imgname}) {
      childImageSharp {
        fluid(maxWidth: 700) {
      ...GatsbyImageSharpFluid_noBase64
    }
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        name
        position
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
`
