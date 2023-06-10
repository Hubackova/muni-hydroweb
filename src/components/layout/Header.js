import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";
import logo from "../../images/logo.png";
import ecdyonurus from "../../images/ecdyonurus_head.jpg";
import ImgSlider from "./ImgSlider";
import czFlag from "../../images/cz-icon.png";
import ukFlag from "../../images/uk-icon.png";
import { IntContextConsumer } from "../Context";

const HeaderComponent = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp(
          filter: { fluid: { src: { regex: "/homepage_/" } } }
          sort: { fields: [fluid___originalName], order: ASC }
        ) {
          edges {
            node {
              id
              fluid(maxWidth: 3200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const imgs = data.allImageSharp.edges.map((i) => i.node.fluid);
      const url = typeof window !== "undefined" ? window.location.href : "";
      return (
        <IntContextConsumer>
          {({ int }) => (
            <Header className={className}>
              <LeftSide>
                <ImgLogo src={ecdyonurus} alt="logo-ecdyonurus" />

                <div>
                  <div>
                    <IntContextConsumer>
                      {({ changeToCz }) => (
                        <Flag
                          src={czFlag}
                          name="cz"
                          onClick={() => changeToCz()}
                        />
                      )}
                    </IntContextConsumer>
                    <IntContextConsumer>
                      {({ changeToEn }) => (
                        <Flag
                          src={ukFlag}
                          name="en"
                          onClick={() => changeToEn()}
                        />
                      )}
                    </IntContextConsumer>
                  </div>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Main>
                      {int === "en"
                        ? "Hydrobiology working group"
                        : "Pracovní skupina hydrobiologie"}
                    </Main>
                  </Link>
                  {!className && (
                    <SubMain>
                      {int === "en"
                        ? "Department of Botany and Zoology | Faculty of Science | Masaryk University"
                        : "Ústav botaniky a zoologie | Přírodovědecká fakulta | Masarykova univerzita"}
                    </SubMain>
                  )}
                </div>

                <ImgLogo src={logo} alt="logo" />
              </LeftSide>
              <RightSide>
                <ImgSlider imgs={imgs} />
              </RightSide>
            </Header>
          )}
        </IntContextConsumer>
      );
    }}
  />
);

export default HeaderComponent;

const Header = styled.div`
  display: flex;
`;

const RightSide = styled.div`
  display: none;
  flex: 1;
  align-self: center;

  @media (min-width: 1480px) {
    display: block;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  max-width: 150px;
  margin: 30px 10px;
  @media (max-width: 576px) {
    max-width: 60px;
  }
`;

const Main = styled.div`
  font-size: 2em;
  @media (max-width: 1024px) {
    line-height: 1.2em;
    font-size: 1.5em;
  }
  @media (max-width: 576px) {
    line-height: 1.2em;
    font-size: 1em;
  }
  font-weight: bold;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
`;

const SubMain = styled.div`
  font-size: 1em;
  color: ${(props) => props.theme.white};
  padding-bottom: 0.5em;
  margin-top: 0.7em;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Flag = styled.img`
  height: 48px;
  margin: 0 2px;
  align-self: flex-end;
  cursor: pointer;
  @media (max-width: 576px) {
    height: 26px;
  }
`;
