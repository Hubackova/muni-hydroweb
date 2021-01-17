import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

import ecdyonurus from "../../pages/images/ecdyonurus_head.jpg";
import ImgSlider from "./ImgSlider";
import czFlag from "../../pages/images/cz-icon.png";
import ukFlag from "../../pages/images/uk-icon.png";
import { IntContextConsumer } from "../Context";

const HeaderComponent = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp(filter: { fluid: { src: { regex: "/homepage_/" } } }
        sort: { fields: [fluid___originalName], order: ASC }) {
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
    render={data => {
      const imgs = data.allImageSharp.edges.map(i => i.node.fluid);
      return (
        <IntContextConsumer>
          {({ int }) => (
            <Header className={className}>
              <LeftSide>
                <TitleWrapper>
                  <ImgCont>
                    <img src={ecdyonurus} alt="logo" />
                  </ImgCont>
                  <Muni>
                    {window.location.href.includes("projects/project3") && <IntContextConsumer>
                      {({ changeToCz }) => (
                        <Flag src={czFlag} name="cz" onClick={() => changeToCz()} />
                      )}
                    </IntContextConsumer>
                    <IntContextConsumer>
                      {({ changeToEn }) => (
                        <Flag src={ukFlag} name="en" onClick={() => changeToEn()} />
                      )}
                    </IntContextConsumer>}
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
                  </Muni>
                </TitleWrapper>
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
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 2;
  flex-flow: column;
  display: flex;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RightSide = styled.div`
  flex: 1;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const Muni = styled.div`
  padding: 0.3em;
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
  margin-top: 0.7em;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Flag = styled.img`
  height: 48px;
  margin: 2px;
  align-self: flex-end;
  cursor: pointer;
`;
