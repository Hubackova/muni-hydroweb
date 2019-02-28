import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Test = ({ data }) => {
    console.log(data)
  return (
    <Layout>
      <div>{JSON.stringify(data)}</div>
    </Layout>
  )
}


export default Test

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`