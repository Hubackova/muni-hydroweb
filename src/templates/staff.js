import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import StaffBox from '../components/staffBox'

export default ({ pageContext: { staffData } }) => (
    <Layout>

        {staffData.map(person => <StaffBox personInfo={person} key={person.id}/>)}

    </Layout>
  )

