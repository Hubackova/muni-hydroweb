import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import StyledLink from "./atoms/StyledLink";
import researchgate from "../images/social-researchgate.png";
import is from "../images/social-is.png";
import Img from "gatsby-image";

const text = { thesis: "Práce", supervisor: "Školitel" };
const textEn = { thesis: "Thesis", supervisor: "Supervisor" };

class PersonBox extends Component {
  setPosition = () => {
    const position = typeof window !== "undefined" && window && window.scrollY;
    this.props.isStudent
      ? localStorage.setItem("studentScroll", position)
      : localStorage.setItem("staffScroll", position);
  };

  render() {
    const { personInfo, linkTo = "#", isStudent, fluid, int } = this.props;
    return (
      <Box>
        <ImgBox>
          <Link to={linkTo} onClick={this.setPosition}>
            {fluid && <Img fluid={fluid} />}
          </Link>
        </ImgBox>
        <div onClick={() => this.setPosition()}>
          <StyledLink to={linkTo}>
            <Name>
              {personInfo.name}
              {!isStudent && (
                <div style={{ fontSize: "0.7em", color: "#778899" }}>
                  {int === "en" ? personInfo.positionEn : personInfo.position}
                </div>
              )}
            </Name>
          </StyledLink>
          <div>
            {isStudent && (
              <Div>
                <div>
                  <u>{int === "en" ? textEn.thesis : text.thesis}:</u>{" "}
                  {int === "en" ? personInfo.thesisEn : personInfo.thesis}
                </div>
                <div>
                  <u>{int === "en" ? textEn.supervisor : text.supervisor}:</u>{" "}
                  {personInfo.supervisor}
                </div>
              </Div>
            )}
            <Div>
              <i
                className="fa fa-envelope fa-lg"
                style={{ color: "black", marginRight: 15 }}
              />
              <a href={`mailto:${personInfo.email}` || "#"}>
                <span>{personInfo.email}</span>
              </a>
            </Div>
            <Div>
              <i className="fa fa-phone fa-lg" style={{ marginRight: 15 }} />
              {personInfo.phone}
            </Div>
            <Div>
              <i className="fa fa-map-marker" style={{ marginRight: 25 }} />
              {personInfo.room}
            </Div>
            <Div>
              {personInfo.rg && personInfo.rg !== "-" && (
                <a href={personInfo.rg || "#"}>
                  <img src={researchgate} alt="researchgate" height="40px" />
                </a>
              )}
              {personInfo.is && personInfo.is !== "-" && (
                <a href={personInfo.is || "#"}>
                  <img src={is} alt="is" height="40px" />
                </a>
              )}
            </Div>
          </div>
        </div>
      </Box>
    );
  }
}
export default PersonBox;

const Box = styled.div`
  display: flex;
  margin-top: 20px;
  @media (max-width: 1386px) {
    margin: 5px 20px;
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const ImgBox = styled.div`
  min-width: 190px;
  margin-right: 20px;
  margin-top: 8px;
`;

const Name = styled.h3`
  color: ${(props) => props.theme.lightblue};
  margin: 0;
  margin-bottom: 20px;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`;

const Div = styled.div`
  margin: 10px 0px;
`;
