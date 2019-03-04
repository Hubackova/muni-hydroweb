import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import H2 from '../components/atoms/H2'
import Img from 'gatsby-image'
import ImgSlider from "../components/layout/ImgSlider";

export default ({data}) => {
  const {markdownRemark} = data
  return (
    <Layout>
      <NarrowContainer>
        <Content>
          <h1>{markdownRemark.frontmatter.name}</h1>
          <div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
          <StyledLink to="/projects/">
            <i className="fa fa-arrow-left" />
          </StyledLink>
        </Content>
      </NarrowContainer>
    </Layout>
  )
}

const ImgContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
`

const NarrowContainer = styled.div`
  display: flex;
`

const Content = styled.div`
  margin: 20px ;
  @media (max-width: 1386px) {
    margin: 0 20px;
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
`

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "project3"}}) {
      html
      frontmatter {
        title
        name
        image
      }
    }
  }
`
