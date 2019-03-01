import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "gatsby"
import StyledLink from "./atoms/StyledLink"
import researchgate from "../pages/images/social-researchgate.png";
import is from "../pages/images/social-is.png";


class PersonBox extends Component {
    render() {
      const {personInfo, linkTo, isStudent} = this.props
        return (
        <Box>
            <BoxPart style={{flex: 1, minWidth: 265, textAlign: 'center'}}>
                <Link to={linkTo}>
                    {personInfo.img && <img src={personInfo.img} alt={personInfo.name} height='265px'/>}
                </Link>
            </BoxPart>
            <BoxPart style={{flex: 6, minWidth: 260}}>
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
            </BoxPart>
        </Box>
);
}}
export default PersonBox;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    padding: 0;
  }
`;

const Name = styled.h3`
    color: ${props => props.theme.main};
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;
    border-bottom: 0.08em solid rgb(229, 229, 229);
 `

const BoxPart = styled.div`
    padding: 0 1em;
 `

const Div = styled.div`
    margin: 10px 0px;
 `

//  const StyledLink = styled.a`
//   color: ${props => props.theme.grey};
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     text-decoration: ${props => props.underline ? 'underline' : 'none'};
//   }
// `;