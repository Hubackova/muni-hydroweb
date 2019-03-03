import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

class ProjectBox extends Component {
  render() {
    const {project, linkTo, fluid} = this.props
    return (
      <StyledLink to={linkTo}>
        <Box>
          {fluid && <Img fluid={fluid} />}
          <Name>{project.frontmatter.name}</Name>
        </Box>
      </StyledLink>
    )
  }
}
export default ProjectBox

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 1em;
  padding: 1em;
  line-height: 1.6em;
`

const Name = styled.h3`
  color: #46acc2;
  text-transform: uppercase;
  margin-top: 1em;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`

//todo: similar with staff
const StyledLink = styled(Link)`
  text-decoration: none;
`
