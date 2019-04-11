import React from "react";
import styled from "styled-components";
import facebook from "../../pages/images/facebook.png";
import youtube from "../../pages/images/youtube.png";
import twitter from "../../pages/images/twitter.png";
import { IntContextConsumer } from "../Context";

const footerCz = {
  botzool: "Ústav botaniky a zoologie, ",
  faculty: "Přírodovědecké fakulty",
  university: " Masarykovy Univerzity",
  postalAddressHeading: "Poštovní adresa: ",
  physicalAddressHeading: "Adresa pracoviště: ",
  postalAddress: "Kotlářská 267/2, 611 37, Brno, Česká Rpublika",
  physicalAddress1: "Univerzitní kampus Bohunice, budova A32,",
  physicalAddress2: "Kamenice 753/5, 625 00, Brno, Česká republika",
  links: "Odkazy"
};
const footerEn = {
  botzool: "Department of Botany and Zoology, ",
  faculty: "Faculty of Science",
  university: " Masaryk University",
  postalAddressHeading: "Postal address: ",
  physicalAddressHeading: "Workplace address: ",
  postalAddress: "Kotlářská 267/2, 611 37, Brno, Česká Rpublika",
  physicalAddress1: "University Campus Bohunice, building A32,",
  physicalAddress2: "Kamenice 753/5, 625 00, Brno, Czech Republic",
  links: "Links"
};

const FooterContent = () => (
  <IntContextConsumer>
    {({ int }) => {
      const footer = int === "en" ? footerEn : footerCz;
      return (
        <Container>
          <FooterSection background="rgba(150,150,150, 0.9)">
            <FooterHeader>MUNI</FooterHeader>
            <A href="http://botzool.sci.muni.cz">{footer.botzool}</A>
            je součástí <A href="http://www.sci.muni.cz/">{footer.faculty}</A>
            <A href="https://www.muni.cz/">{footer.university}</A>
          </FooterSection>
          <FooterSection background="rgba(150,150,150, 0.8)">
            <FooterHeader>{footer.postalAddressHeading}</FooterHeader>
            {footer.postalAddress}
          </FooterSection>
          <FooterSection background="rgba(150,150,150, 0.7)">
            <FooterHeader>{footer.physicalAddressHeading}</FooterHeader>
            {footer.physicalAddress1}
            <br />
            {footer.physicalAddress2}
          </FooterSection>
          <FooterSection background="rgba(150,150,150, 0.6)">
            <FooterHeader>{footer.links}</FooterHeader>
            <a href="https://www.facebook.com/botzool">
              <Img src={facebook} />
            </a>
            <a href="https://www.youtube.com/channel/UCpUU624DlUwOewM_KfG1rpA/videos">
              <Img src={youtube} />
            </a>
            <a href="https://twitter.com/BotZool_MUNI">
              <Img src={twitter} />
            </a>
          </FooterSection>
        </Container>
      );
    }}
  </IntContextConsumer>
);

export default FooterContent;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin: 0;
`;

const FooterSection = styled.div`
  flex: 1;
  color: ${props => props.theme.white};
  background-color: ${props => props.background};
  padding: 1em;
  text-align: center;
  line-height: 1.2;
  min-width: 255px;
  font-size: 16px;
`;

const A = styled.a`
  color: ${props => props.theme.white};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 3.8em;
  padding: 0.5em;
`;

const FooterHeader = styled.div`
  color: black;
  text-decoration: underline;
  font-weight: bold;
  padding-bottom: 0.5em;
`;
