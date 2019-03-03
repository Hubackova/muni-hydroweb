// import React from 'react'
// import styled from 'styled-components'

// import Layout from '../components/layout'
// import StaffBox from '../components/staffBox'

// export default ({ pageContext: { staffData } }) => (
//     <Layout>

//         {staffData.map(person => <StaffBox personInfo={person} key={person.id}/>)}

//     </Layout>
//   )



import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import PersonBox from '../components/personBox'

export default ({data}) => {
  return (
    <Layout>
      <div>
      {data.allMarkdownRemark.edges.map(({node}) => {
          const img = data.allImageSharp.edges.find(img => img.node.fluid.src.includes(node.frontmatter.title))
          return (
          <PersonBox personInfo={node.frontmatter} key={node.id} isStudent={true} linkTo={node.fields.slug} fluid={img && img.node.fluid}/>
        )})}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp(filter: {fluid: {src: {regex: "/staff_/"}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
      ...GatsbyImageSharpFluid_noBase64
    }
        }
      }
    }

    allMarkdownRemark(filter: {fields: {slug: {regex: "/staff/"}}}, sort: {
      fields: [frontmatter___order]
      order: ASC
    }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            name
            position
            email
            phone
            room
            is
            rg
            image
            order
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
