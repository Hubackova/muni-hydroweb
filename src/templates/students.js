// import React from 'react'
// import styled from 'styled-components'

// import Layout from '../components/layout'
// import StaffBox from '../components/staffBox'
// import StudentsSection from '../components/studentsSection'
// import H2 from "../components/atoms/H2";

// export default ({ pageContext: { phdStudentsData, studentsData } }) => (
//     <Layout>
//       <Container>
//         <Section>
//           <H2>Ph.D. studenti</H2>
//           {phdStudentsData.map(student => <StaffBox personInfo={student} key={student.id} isStudent={true}/>)}
//         </Section>
//         <StudentsSection type="Mgr. Studenti" students={studentsData.mgrStudents}/>
//         <StudentsSection type="Bc. Studenti" students={studentsData.bcStudents}/>
//         <StudentsSection type="Absolventi" students={studentsData.absolvents}/>
//       </Container>
//     </Layout>
//   )

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `
// const Section = styled.div`
//   padding: 0 2em;
//   @media (max-width: 800px) {
//     padding: 0;
//   }
// `;

import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import PersonBox from '../components/personBox'

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <PersonBox personInfo={node.frontmatter} key={node.id} isStudent={true} linkTo={node.fields.slug} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/people/"}}}) {
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
