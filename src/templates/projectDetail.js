import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Lightbox from "react-images";

class ProjectDetail extends Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 1
  };

  closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
  };

	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
  }
  
  openLightbox = (e, index) => {
    e.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    const {
      data: { markdownRemark, allImageSharp }
    } = this.props;
    const imgs =
      allImageSharp &&
      allImageSharp.edges.map((i, index) => (
        <div onClick={e => this.openLightbox(e, index)}>
          <Img fluid={i.node.fluid} />
        </div>
      ));
    const imgs2 = imgs && imgs.splice(0, Math.ceil(imgs.length / 2));
    const captions = markdownRemark.frontmatter.captions.split("/")
    const photos = allImageSharp && allImageSharp.edges.map((photo, index) => Object.assign({ srcSet: photo.node.fluid.srcSet, caption: captions[index] }))

    return (
      <Layout>
        <NarrowContainer>
          <ImgColumn>{imgs2}</ImgColumn>
          <Content>
            <Lightbox
              images={photos}
              isOpen={this.state.lightboxIsOpen}
              currentImage={this.state.currentImage}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              onClose={this.closeLightbox}
            />
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
  }
}

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

export const query = graphql`
  query($imgsRegex: String!, $title: String!) {
    allImageSharp(filter: { fluid: { src: { regex: $imgsRegex } } }
      sort: {fields: [fluid___originalName], order: ASC}
      ) {
      edges {
        node {
          id
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }

    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        name
        captions
      }
    }
  }
`;
