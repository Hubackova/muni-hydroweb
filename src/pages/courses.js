import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const Courses = ({data}) =>  (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </Layout>
  )

export default Courses

export const coursesQuery = graphql`
  query coursesQuery {
    markdownRemark(frontmatter: {title: {eq: "courses"}}) {
      html
    }
  }
`
