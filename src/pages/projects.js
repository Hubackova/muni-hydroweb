import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'

import ProjectBox from '../components/projectBox'
import Layout from '../components/layout'

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        {data.allMarkdownRemark.edges.map(({node}) => {
          const img = data.allImageSharp.edges.find(img => img.node.fluid.src.includes(`project_${node.frontmatter.title}.jpg`))
          return <ProjectBox project={node} key={node.id} linkTo={node.frontmatter.title} fluid={img && img.node.fluid} />
        })}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  justify-content: center;
`

export const query = graphql`
  query {
    allImageSharp(filter: {fluid: {src: {regex: "/project_/"}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

    allMarkdownRemark(filter: {fields: {slug: {regex: "/project/"}}}) {
      edges {
        node {
          frontmatter {
            title
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
