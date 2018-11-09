import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import StaffBox from '../components/StaffBox'
import StudentsSection from '../components/StudentsSection'
import H2 from "../components/atoms/H2";

export default ({ pageContext: { phdStudentsData, studentsData } }) => (
    <Layout>
      <Container>
        <Section>
          <H2>Ph.D. studenti</H2>
          {phdStudentsData.map(student => <StaffBox personInfo={student} key={student.id} isStudent={true}/>)}
        </Section>
        <StudentsSection type="Mgr. Studenti" students={studentsData.mgrStudents}/>
        <StudentsSection type="Bc. Studenti" students={studentsData.bcStudents}/>
        <StudentsSection type="Absolventi" students={studentsData.absolvents}/>
      </Container>
    </Layout>
  )

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Section = styled.div`
  padding: 0 2em;
  @media (max-width: 800px) {
    padding: 0;
  }
`;