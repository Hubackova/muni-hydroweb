const projectsData = require('./content/projectsData');
const staffData = require('./content/staffData');
const phdStudentsData = require('./content/phdStudentsData');
const studentsData = require('./content/studentsData');

const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {

  // Create a page that lists all projects.
  createPage({
    path: `/projects`,
    component: require.resolve('./src/templates/projects.js'),
    context: { projectsData }
  });

  // Create a page for each project.
  projectsData.forEach(project => {
    createPage({
      path: `${project.id}/`,
      component: require.resolve('./src/templates/projectDetail.js'),
      context: { project }
    });
  });

  // Create a page that lists all staff.
  createPage({
    path: `/staff`,
    component: require.resolve('./src/templates/staff.js'),
    context: { staffData }
  });

  // Create a page for each person from staff.
  staffData.forEach(person => {
    createPage({
      path: `${person.id}/`,
      component: require.resolve('./src/templates/staffDetail.js'),
      context: { person }
    });
  });

  // Create a page that lists all students.
  createPage({
    path: `/students`,
    component: require.resolve('./src/templates/students.js'),
    context: { phdStudentsData, studentsData }
  });


  // Create a page for each phd student.
  phdStudentsData.forEach(person => {
    createPage({
      path: `${person.id}/`,
      component: require.resolve('./src/templates/staffDetail.js'),
      context: { person }
    });
  });

};