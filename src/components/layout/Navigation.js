import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const ListLink = props => (
      <NavigationLink to={props.to} className={`${props.menuVisible} ${props.className}`}>
        {props.children}
      </NavigationLink>
    )


const windowGlobal = typeof window !== 'undefined' && window

class Navigation extends PureComponent {
  state = {
    menuVisible: false,
    width: windowGlobal.innerWidth,
    scrolling: 'upper'
  }

  componentDidMount() {
    this.prev = window.scrollY
    windowGlobal.addEventListener('resize', this.handleWindowSizeChange)
    windowGlobal.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
    window.removeEventListener('scroll', this.handleScroll)
    this.prev = false
  }

  handleWindowSizeChange = () => {
    this.setState({width: windowGlobal.innerWidth})
  }

  handleScroll = event => {
    const windowGlobal = event.currentTarget
    if (this.prev > windowGlobal.scrollY) {
      this.setState({scrolling: 'up', menuVisible: false})
      if (windowGlobal.scrollY === 0) this.setState({scrolling: 'upper'})
    } else if (this.prev < windowGlobal.scrollY) {
      this.setState({scrolling: 'down'})
    }
    this.prev = windowGlobal.scrollY
  }

  toggleMenu = () => {
    this.setState({menuVisible: !this.state.menuVisible})
  }

  getClass = urlIncludes => {
    if (windowGlobal && windowGlobal.location && windowGlobal.location.href.includes(urlIncludes)) {
      return 'active'
    } else return ''
  }

  render() {
    const {scrolling, width} = this.state
    const isMobile = width < 800
    const menuVisible = this.state.menuVisible || !isMobile ? 'menuVisible' : ''

    return (
      <Container scrolling={scrolling} className={scrolling}>
        <NavbarToggle onClick={this.toggleMenu} className={menuVisible}>
          <i className="fa fa-bars" />
        </NavbarToggle>

        <ListLink to="/" menuVisible={menuVisible} className={this.props.isIndex ? 'active' : ''}>
          HomePage
        </ListLink>
        <ListLink to="/history/" menuVisible={menuVisible} className={this.getClass('history')}>
          Historie
        </ListLink>
        <ListLink to="/staff/" menuVisible={menuVisible} className={this.getClass('staff')}>
          Zaměstnatnci
        </ListLink>
        <ListLink to="/students/" menuVisible={menuVisible} className={this.getClass('students')}>
          Studenti
        </ListLink>
        <ListLink to="/projects/" menuVisible={menuVisible} className={this.getClass('projects')}>
          Projekty
        </ListLink>
        <NavigationLinkA href="http://botzool.sci.muni.cz/publikace/h/" target="_blanc" className={`${menuVisible} `}>
        Publikace
      </NavigationLinkA>

        <ListLink to="/courses/" menuVisible={menuVisible} className={this.getClass('courses')}>
          Předměty
        </ListLink>
        {/* <Li menuVisible={menuVisible} className={this.getClass("gallery")}>
          Galerie
        </Li> */}
        <ListLink to="/links/" menuVisible={menuVisible} className={this.getClass('links')}>
          Odkazy
        </ListLink>
      </Container>
    )
  }
}

export default Navigation

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0 15px;
  opacity: 0;
  background-color: ${props => props.theme.white};
  @media (max-width: 799px) {
    flex-direction: column;
    width: 100vw;
  }
  &.up {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 1;
  }

  &.upper {
    opacity: 1;
  }
`

const NavigationLink = styled(Link)`
  display: none;
  opacity: 0;
  transition: opacity 10s linear;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0px 10px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.grey};

  &.menuVisible {
    display: flex;
    opacity: 1;
  }
  &:last-child {
    border-right: 0px;
  }
  &:hover {
    border-bottom: 2px solid white;
  }

  &.active {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 799px) {
    border: 0px;
  }
`

const NavigationLinkA = styled.a`
  display: none;
  opacity: 0;
  transition: opacity 10s linear;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0px 10px;
  color: ${props => props.theme.grey};

  &.menuVisible {
    display: flex;
    opacity: 1;
  }
  &:last-child {
    border-right: 0px;
  }
  &:hover {
    border-bottom: 2px solid white;
  }

  &.active {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 799px) {
    border: 0px;
  }
`

const NavbarToggle = styled.span`
  margin-right: 10px;
  display: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 40px;
  &:hover {
    color: ${props => props.theme.secondary};
  }
  &.menuVisible {
    &:hover {
      color: grey;
    }
  }
  @media (max-width: 799px) {
    display: flex;
    flex: 1;
  }
`
