import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { IntContextConsumer } from "./Context";

const Actualities = ({ imgs, int }) => {
  const reverserd = imgs
    .filter((i) =>
      int === "en"
        ? i.node.fluid.src.includes("en-small-news_")
        : !i.node.fluid.src.includes("en-small-news_")
    )
    .sort((a, b) => (a.node.fluid.src < b.node.fluid.src ? 1 : -1))
    .slice(0, 4);

  return (
    <IntContextConsumer>
      {({ int }) => {
        return (
          <RightPanel>
            <GridWrapper>
              {reverserd.map((img, index) => {
                return (
                  <ResourceBox
                    to={"/actualities"}
                    key={index}
                    img={img.node?.fluid.src}
                    target="_blanc"
                  />
                );
              })}
            </GridWrapper>
            <Link to="/actualities">
              {int === "en" ? "Highlights Archive" : "Archiv zajímavostí"}
            </Link>
          </RightPanel>
        );
      }}
    </IntContextConsumer>
  );
};

export default Actualities;

const RightPanel = styled.div`
  border-left: 1px solid ${(props) => props.theme.grey};
  padding: 1em;
  line-height: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    border-left: none;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 10vw));
  grid-template-rows: repeat(2, minmax(250px, 10vw));
  grid-gap: 20px;
  grid-auto-flow: column;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(2, minmax(200px, 200px));
    grid-template-rows: repeat(2, minmax(200px, 200px));
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(200px, 200px));
    grid-template-rows: repeat(4, minmax(200px, 200px));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(160px, 160px));
    grid-template-rows: repeat(2, minmax(160px, 160px));
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, minmax(160px, 160px));
    grid-template-rows: repeat(2, minmax(160px, 160px));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(200px, 200px));
    grid-template-rows: repeat(4, minmax(200px, 200px));
  }
`;

const ResourceBox = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover:after {
    box-shadow: 2px 2px 3px grey;
  }

  ::after {
    content: "";
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 105%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    border: 0.5px solid gray;
    border-radius: 12%;
    box-shadow: 5px 5px 5px grey;
  }
`;
