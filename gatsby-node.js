const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

/* exports.createPages = async function ({ actions, graphql }) {
  const projects = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" } } }) {
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
  `);

  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      node.fields.slug
    );
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/projectDetail.js`),
      context: {
        slug: node.fields.slug,
        title: imgName,
        imgsRegex: `/${imgName}_/`,
      },
    });
  });
}; */

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const projects = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" } } }) {
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
  `);

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const projectDetailTemplate = path.resolve(
    `./src/templates/projectDetail.js`
  );
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const imgName = node.fields.slug.slice(10).slice(0, -1);
    console.log(node.fields.slug, "AAAAAAAAAAAAAAAAAAAA");
    createPage({
      path: node.fields.slug,
      component: projectDetailTemplate,
      context: {
        slug: node.fields.slug,
        title: imgName,
        imgsRegex: `/${imgName}_/`,
      },
    });
  });

  const students = await graphql(`
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
  `);

  students.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const imgName = node.fields.slug.slice(10).slice(0, -1);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/personDetail.js`),
      context: {
        slug: node.fields.slug,
        imgname: `/${imgName}.jpg/`,
      },
    });
  });

  const staff = await graphql(`
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
  `);
  staff.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const imgName = node.fields.slug.slice(7).slice(0, -1);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/personDetail.js`),
      context: {
        slug: node.fields.slug,
        imgname: `/${imgName}.jpg/`,
      },
    });
  });
};
