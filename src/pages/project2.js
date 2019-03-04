import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import H2 from '../components/atoms/H2'
import Img from 'gatsby-image'
import ImgSlider from "../components/layout/ImgSlider";

export default ({data}) => {
  const {markdownRemark, allImageSharp} = data
  const imgs = allImageSharp.edges.map(i => <Img fluid={i.node.fluid} />)
  return (
    <Layout>
      <NarrowContainer>
        <Content>
          <h1>{markdownRemark.frontmatter.name}</h1>
          <div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
          <ImgContainer><ImgSlider imgs={allImageSharp.edges.map(i => i.node.fluid)}/></ImgContainer>
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
  width: 100%

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
