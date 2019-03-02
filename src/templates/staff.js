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
        {data.allMarkdownRemark.edges.map(({node}) => (
          <PersonBox personInfo={node.frontmatter} key={node.id} linkTo={node.fields.slug} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/staff/"}}}, sort: {
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
            position
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
