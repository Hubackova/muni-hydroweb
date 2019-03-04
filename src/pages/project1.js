import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import H2 from '../components/atoms/H2'
import Img from 'gatsby-image'

export default ({data}) => {
  const {markdownRemark, allImageSharp} = data
  const imgs = allImageSharp.edges.map(i => <Img fluid={i.node.fluid} />)
  const imgs2 = imgs.splice(0, Math.ceil(imgs.length / 2));
  return (
    <Layout>
      <NarrowContainer>
        <ImgColumn>{imgs2}</ImgColumn>
        <Content>
          <h1>{markdownRemark.frontmatter.name}</h1>
          <div dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
          <StyledLink to="/projects/">
            <i className="fa fa-arrow-left" />
          </StyledLink>
        </Content>
        <ImgColumn>{imgs}</ImgColumn>
      </NarrowContainer>
    </Layout>
  )
}

const NarrowContainer = styled.div`
  display: flex;
`
const ImgColumn = styled.div`
  min-width: 25%;
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
    allImageSharp(filter: {fluid: {src: {regex: "/project1_/"}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    markdownRemark(frontmatter: {title: {eq: "project1"}}) {
      html
      frontmatter {
        title
        name
        image
      }
    }
  }
`
