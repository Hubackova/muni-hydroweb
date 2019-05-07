import React, { useState, useEffect, useLayoutEffect } from "react";
import { graphql } from "gatsby";
import { IntContextConsumer } from "../components/Context";
import Layout from "../components/layout";
import PersonBox from "../components/personBox";
import Note from "../components/atoms/Note";

export default ({ data }) => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => { setShowChild(true); }, [])
  useLayoutEffect(() => {
    const position =  localStorage.getItem('studentScroll');
    typeof window !== 'undefined' && window && window.scrollTo(0, position)
  });
  
  const students = data.markdownRemark.html;
  return (
    showChild && <Layout>
      <IntContextConsumer>
        {({ int }) => (
          <div className={int}>
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                const img = data.allImageSharp.edges.find(img =>
                  img.node.fluid.src.includes(node.frontmatter.title)
                );
                return (
                  <PersonBox
                    personInfo={node.frontmatter}
                    key={node.id}
                    int={int}
                    isStudent={true}
                    linkTo={node.fields.slug}
                    fluid={img.node.fluid}
                  />
                );
              })}
            </div>
            <Note>* {int === "en" ? "Maternity leave" : "Mateřská dovolená"}</Note>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: students }} />
          </div>
        )}
      </IntContextConsumer>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "mgrBc" } }) {
      id
      html
    }

    allImageSharp(filter: { fluid: { src: { regex: "/phd_/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/students/" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            name
            thesis
            thesisEn
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
`;
