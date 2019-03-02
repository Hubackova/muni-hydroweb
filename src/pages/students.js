import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import PersonBox from '../components/personBox'

export default ({data}) => {
  const students = data.markdownRemark.html;
console.log(data)
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({node}) => {
          const img = data.allImageSharp.edges.find(img => img.node.fluid.src.includes(node.frontmatter.title))
          return (
          <PersonBox personInfo={node.frontmatter} key={node.id} isStudent={true} linkTo={node.fields.slug} fluid={img.node.fluid}/>
        )})}
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: students }} />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "students" } }) {
    id
    html
  }

    allImageSharp(filter: {fluid: {src: {regex: "/phd_/"}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
      ...GatsbyImageSharpFluid_noBase64
    }
        }
      }
    }

    allMarkdownRemark(filter: {fields: {slug: {regex: "/people/"}}}, sort: {
      fields: [frontmatter___title]
      order: ASC
    }) {
      totalCount
      edges {
        node {
          id
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
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
