import React from "react"
import styled from "styled-components";

export default ({children}) => {
    return (
        <Note> {children} </Note>
    );
};

const Note = styled.div`
  color: ${props => props.theme.main};
  margin: 10px 0;
`;