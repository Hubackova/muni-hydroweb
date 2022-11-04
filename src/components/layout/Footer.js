import React from "react";
import styled from "styled-components";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";
import { IntContextConsumer } from "../Context";

const footerCz = {
  botzool: "Ústav botaniky a zoologie ",
  isPart: "je součástí ",
  faculty: "Přírodovědecké fakulty",
  university: " Masarykovy univerzity",
  postalAddressHeading: "Poštovní adresa ",
  physicalAddressHeading: "Adresa pracoviště ",
  postalAddress: "Kotlářská 267/2, 611 37, Brno, Česká republika",
  physicalAddress1: "Univerzitní kampus Bohunice, budova D32,",
  physicalAddress2: "Kamenice 753/5, 625 00, Brno, Česká republika",
  links: "Odkazy",
};

const footerEn = {
  botzool: "Department of Botany and Zoology ",
  isPart: "is a part of ",
  faculty: "Faculty of Science",
  university: " Masaryk University",
  postalAddressHeading: "Postal address: ",
  physicalAddressHeading: "Workplace address: ",
  postalAddress: "Kotlářská 267/2, 611 37, Brno, Czech Republic",
  physicalAddress1: "University Campus Bohunice, building D32,",
  physicalAddress2: "Kamenice 753/5, 625 00, Brno, Czech Republic",
  links: "Links",
};

const FooterContent = () => (
  <IntContextConsumer>
    {({ int }) => {
      const footer = int === "en" ? footerEn : footerCz;
      return (
        <Container>
          <FooterSection background="rgba(150,150,150, 0.9)">
            <FooterHeader>MUNI</FooterHeader>
            <A
              href={
                int === "cz"
                  ? "http://botzool.sci.muni.cz"
                  : "https://botzool.sci.muni.cz/en"
              }
            >
              {footer.botzool}
            </A>
            {footer.isPart}{" "}
            <A
              href={
                int === "cz"
                  ? "http://www.sci.muni.cz/"
                  : "https://www.sci.muni.cz/en"
              }
            >
              {footer.faculty}
            </A>
            <A
              href={
                int === "cz" ? "https://www.muni.cz/" : "https://www.muni.cz/en"
              }
            >
              {footer.university}
            </A>
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
  width: "100%";
  flex-wrap: wrap;
  margin: 0;
`;

const FooterSection = styled.div`
  flex: 1;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.background};
  padding: 1em;
  text-align: center;
  line-height: 1.2;
  min-width: 255px;
  font-size: 16px;
`;

const A = styled.a`
  color: ${(props) => props.theme.white};
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
