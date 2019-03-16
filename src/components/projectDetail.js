import React from "react";
import Img from 'gatsby-image'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Layout from './layout'

const ProjectDetail = ({data: { markdownRemark, allImageSharp }}) => {
  const imgs = allImageSharp && allImageSharp.edges.map(i => <Img fluid={i.node.fluid} />)
  const imgs2 = imgs && imgs.splice(0, Math.ceil(imgs.length / 2));
  return (
    <Layout>
      <NarrowContainer>
        <ImgColumn>{imgs2}</ImgColumn>
        <Content>
          <h1>{markdownRemark.frontmatter.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <StyledLink to="/projects/">
            <i className="fa fa-arrow-left" />
          </StyledLink>
        </Content>
        <ImgColumn>{imgs}</ImgColumn>
      </NarrowContainer>
    </Layout>
  );
};

const NarrowContainer = styled.div`
  display: flex;
`;
const ImgColumn = styled.div`
  min-width: 25%;
`;

const Content = styled.div`
  margin: 20px;
  @media (max-width: 1386px) {
    margin: 0 20px;
  }
`;
//todo: similar with staff
const StyledLink = styled(Link)`
  color: ${props => props.theme.grey};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

export default ProjectDetail;
