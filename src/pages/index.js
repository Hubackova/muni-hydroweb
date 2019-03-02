import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import ImgSlider from "../components/layout/ImgSlider";
import Layout from "../components/layout";

import "font-awesome/css/font-awesome.min.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)/" }
            relativeDirectory: { eq: "homepage" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imgs = data.images.edges.map(i => i.node.childImageSharp.fluid);
      return (
        <>

          <Layout><ImgSlider imgs={imgs} />
            <Container>
              <h1>
                Změny diverzity a druhových vlastností vodních organizmů:
                individuální tolerance, dlouhodobé trendy a prostorová
                variabilita
              </h1>
              <div>
                <p>
                  Ekologická společenstva jsou obecně řízena třemi hlavními
                  mechanizmy: 1) Podmínky prostředí selektují druhy na základě
                  jejich individuálních tolerancí; 2) Dostupnost lokality v
                  geografickém prostoru i v čase omezuje rozšíření druhů v
                  závislosti na jejich schopnosti se šířit; 3) Biotické
                  interakce mohou vést až vyloučení konkurenčně málo zdatných
                  druhů v konkrétních systémech.
                </p>
                <p>
                  Naše pracovní skupina hydrobiologů se věnuje výzkumu těchto
                  tří mechanizmů ve vodním prostředí na různých prostorových i
                  časových škálách. Naše studijní plochy zahrnují přirozené,
                  dosud relativně neovlivněné lokality (např. referenční toky
                  vyšších a středních poloh, prameniště a rašeliniště) i
                  lokality pod silným antropogenním tlakem (rybníky, polní
                  mokřady, velké řeky, důlní vody). Zvláštní pozornost věnujeme
                  otázkám, které souvisí s dopady dlouhodobých synergických změn
                  (především klimatu a znečištění) na biodiverzitu vodního
                  prostředí, jmenovitě problému vysychání lokalit vlivem
                  extremizace srážek, změn biodiverzity v řekách nižších poloh,
                  ale také strategiím druhů pro přežívání silně pozměněných až
                  extrémních podmínek.
                </p>
                <p>
                  Klíčové pro všechny tři výše uvedené mechanizmy jsou
                  vlastnosti populací a druhů (species traits), jejich tolerance
                  a plasticita. Optimální přístup k pochopení těchto mechanismů
                  vidíme v kombinaci výzkumu založeném jak na terénním sběru dat
                  v přírodních podmínkách, tak experimentech v přírodních i
                  laboratorních podmínkách, včetně zapojení molekulárních metod.
                </p>
                <p>
                  Náš výzkum je primárně základní, avšak tradičně se naše
                  skupina snaží o využití výsledků k predikcím, vyhodnocení
                  rizik a v oblasti ochrany přírody a managementu.
                </p>
              </div>
            </Container>
          </Layout>
        </>
      );
    }}
  />
);

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
