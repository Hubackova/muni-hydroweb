import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby"
import StyledLink from "./atoms/StyledLink"
import researchgate from "../pages/images/social-researchgate.png";
import is from "../pages/images/social-is.png";
import Img from 'gatsby-image'

class PersonBox extends Component {
    render() {
      const {personInfo, linkTo = "#", isStudent, fluid} = this.props
        return (
        <Box>
            <ImgBox>
                <Link to={linkTo}>
                    {fluid && <Img fluid={fluid}/>}
                </Link>
            </ImgBox>
            <div>
                <StyledLink to={linkTo}>
                    <Name>{personInfo.name}
                    {!isStudent && <div style={{fontSize: '0.7em', color: '#778899'}}>{personInfo.position}</div>}
                    </Name>
                </StyledLink>
                <div>
                    {isStudent && <Div>
                        <div><u>Práce:</u> {personInfo.thesis}</div>
                        <div><u>Školitel:</u> {personInfo.supervisor}</div>
                    </Div>}
                    <Div>
                        <i className="fa fa-envelope fa-lg" style={{color: 'black', marginRight: 15}}></i>
                        <a href={`mailto:${personInfo.email}` || '#'}>
                            <span>{personInfo.email}</span>
                        </a>
                    </Div>
                    <Div>
                        <i className="fa fa-phone fa-lg" style={{marginRight: 15}}></i>
                        {personInfo.phone}
                    </Div>
                    <Div>
                        <i className="fa fa-map-marker" style={{marginRight: 25}}></i>
                        {personInfo.room}
                    </Div>
                    <Div>
                        {personInfo.rg && personInfo.rg !== "-" && <a href={personInfo.rg || '#'}><img src={researchgate} alt='researchgate'  height='40px'/></a>}
                        {personInfo.is && personInfo.is !== "-" && <a href={personInfo.is || '#'}><img src={is} alt='is' height='40px'/></a>}
                    </Div>
                </div>
            </div>
        </Box>
);
}}
export default PersonBox;

const Box = styled.div`
  display: flex;
  margin-top: 20px;
  @media (max-width: 1386px) {
    margin: 0 20px ;
  }
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`
const ImgBox = styled.div`
  min-width: 300px;
  margin-right: 15px;
`

const Name = styled.h3`
    color: ${props => props.theme.lightblue};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `

const Div = styled.div`
    margin: 10px 0px;
 `

const StyledImg = styled.img`
max-width: 250px ;
`
