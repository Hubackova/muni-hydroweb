import React from "react"
import { graphql } from "gatsby"

const Courses = ({ data }) => {
  if (!data && !data.markdownRemark) return <div>...loading</div>;
  const { markdownRemark: courses } = data;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: courses.html }} />
    </div>
  );
};

export default Courses;

export const coursesQuery = graphql`
  query coursesQuery {
    markdownRemark(frontmatter: { title: { eq: "courses" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
