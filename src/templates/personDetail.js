import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

import styled from 'styled-components'
import { Link } from "gatsby";
import PersonBox from "../components/personBox";

const PersonDetail = ({data}) => {
  if (!data && !data.markdownRemark) return <div>...loading</div>
  const {markdownRemark} = data
  const isStudent = markdownRemark.frontmatter && !markdownRemark.frontmatter.position ? true : false
  return (
    <Layout>
      <NarrowContainer>
        <PersonBox personInfo={markdownRemark.frontmatter} isStudent={isStudent} fluid={data.file && data.file.childImageSharp.fluid}/>
        <Content dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
        <StyledLink to={isStudent ? "/students/" : "/staff/"}>
          <i className="fa fa-arrow-left" />
        </StyledLink>
      </NarrowContainer>
    </Layout>
  )
}

export default PersonDetail

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
