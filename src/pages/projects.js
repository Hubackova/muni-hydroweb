// import React from 'react'
// import styled from 'styled-components'

// import Project from '../components/project'
// import Layout from '../components/layout'

// export default ({ pageContext: { projectsData } }) => (
//   <Layout>
//     <Container>
//       {projectsData.map(i => <Project project={i} key={i.id}/>)}
//     </Container>
//   </Layout>
// )

//  const Container = styled.div`
//  display: grid;
//  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
//  justify-content: center;
// `

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
        {data.allMarkdownRemark.edges.map(i => <ProjectBox project={i.node} key={i.id}/>)}
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

    # allImageSharp(filter: {fluid: {src: {regex: "/phd_/"}}}) {
    #   edges {
    #     node {
    #       id
    #       fluid(maxWidth: 700) {
    #   ...GatsbyImageSharpFluid_noBase64
    # }
    #     }
    #   }
    # }

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
