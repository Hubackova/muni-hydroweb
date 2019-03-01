import React from "react";
import styled from "styled-components";
import ecdyonurus from "../../../static/images/ecdyonurus_head.jpg";
import { Link } from "gatsby";
const HeaderComponent = ({ className }) => {
  return (
    <Header className={className}>
      <ImgCont>
        <img src={ecdyonurus} alt="logo"/>
      </ImgCont>
      <Muni>
        <Link to="/" style={{textDecoration: "none"}}><Main>Pracovní skupina hydrobiologie</Main></Link>
        {!className && (
          <SubMain>
            Ústav botaniky a zoologie | Masarykova univerzita | Přírodovědecká
            fakulta
          </SubMain>
        )}
      </Muni>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.main};
  display: flex;
`;

const Muni = styled.div`
  padding: 0.3em;
  align-self: center;
`;

const ImgCont = styled.div`
  img {
    max-width: 150px;
  }
  @media (max-width: 600px) {
    img {
      max-width: 100px;
    }
  }
`;

const Main = styled.div`
  font-size: 2em;
  @media (max-width: 1000px) {
    line-height: 1.2em;
  }
  @media (max-width: 500px) {
    line-height: 1.2em;
    font-size: 1.5em;
  }
  font-weight: bold;
  color: ${props => props.theme.white};
  text-transform: uppercase;
`;

const SubMain = styled.div`
  font-size: 1em;
  color: ${props => props.theme.white};

  padding-bottom: 0.5em;
  @media (max-width: 600px) {
    display: none;
  }
`;
