import React from "react";
import styled from "styled-components";

const NoteComponent = ({ children }) => {
  return <Note> {children} </Note>;
};

const Note = styled.div`
  color: ${(props) => props.theme.main};
  margin: 10px 0;
`;

export default NoteComponent;
