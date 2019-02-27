import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const courses = [
  {
    name: "Hydrobiologie (Bi0000)",
    lecteur: "Jan Helešic",
    link: "http://is.muni.cz"
  },
  {
    name: "Hydrobiologie (Bi0001)",
    lecteur: "Jan Helešic, Jindřiška Bojková",
    link: "http://is.muni.cz"
  },
  {
    name: "Hydrobiologie (Bi0002)",
    lecteur: "Jan Helešic",
    link: "http://is.muni.cz"
  }
];

const Courses = () => {
  const coursesList = courses.map(i => {
    return (
      <li key={i.name}>
        <A href={i.link}>{i.name}</A>. Vyučující:{" "}
        <i>
          <strong>{i.lecteur}</strong>
        </i>
      </li>
    );
  });
  return (
    <Layout>
      <Container>
        <h1> Předměty </h1>
        {coursesList}
      </Container>
    </Layout>
  );
};

Courses.propTypes = {};

export default Courses;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const A = styled.a`
  color: #333;
`;
