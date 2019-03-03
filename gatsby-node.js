const projectsData = require("./content/projectsData");
const staffData = require("./content/staffData");
const phdStudentsData = require("./content/phdStudentsData");
const studentsData = require("./content/studentsData");

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
   graphql(`
    {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/students/" } } }) {
        edges {
          node {
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const imgName = node.fields.slug.slice(8).slice(0, -1)
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/personDetail.js`),
        context: {
          slug: node.fields.slug,
          imgname: `/${imgName}.jpg/`,
        }
      });
    });
  });

  graphql(`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/staff/" } } }) {
      edges {
        node {
          html
          fields {
            slug
          }
        }
      }
    }
  }
`).then(result => {
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const imgName = node.fields.slug.slice(7).slice(0, -1)
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/personDetail.js`),
      context: {
        slug: node.fields.slug,
        imgname: `/${imgName}.jpg/`,
      }
    });
  });
});
};
