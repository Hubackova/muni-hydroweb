import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { IntContextConsumer } from "../Context";

const ListLink = props => (
  <NavigationLink to={props.to} className={`${props.menuVisible} ${props.className}`} onClick={() => {
    localStorage.setItem("studentScroll", 0) 
    localStorage.setItem("staffScroll", 0);
  }}>
    {props.children}
  </NavigationLink>
);

const windowGlobal = typeof window !== "undefined" && window;

class Navigation extends PureComponent {
  state = {
    menuVisible: false,
    width: windowGlobal.innerWidth,
    scrolling: "upper"
  };

  componentDidMount() {
    this.prev = window.scrollY;
    windowGlobal.addEventListener("resize", this.handleWindowSizeChange);
    windowGlobal.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
    this.prev = false;
  }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth });
  };

  handleScroll = event => {
    const windowGlobal = event.currentTarget;
    if (this.prev > windowGlobal.scrollY) {
      this.setState({ scrolling: "up", menuVisible: false });
      if (windowGlobal.scrollY === 0) this.setState({ scrolling: "upper" });
    } else if (this.prev < windowGlobal.scrollY) {
      this.setState({ scrolling: "down" });
    }
    this.prev = windowGlobal.scrollY;
  };

  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  getClass = urlIncludes => {
    if (windowGlobal && windowGlobal.location && windowGlobal.location.href.includes(urlIncludes)) {
      return "active";
    } else return "";
  };

  render() {
    const { scrolling, width } = this.state;
    const isMobile = width < 800;
    const menuVisible = this.state.menuVisible || !isMobile ? "menuVisible" : "";

    const textCz = {
      homepage: "HomePage",
      history: "Historie",
      staff: "Zaměstnatnci",
      students: "Studenti",
      projects: "Projekty",
      publications: "Publikace",
      courses: "Předměty",
      links: "Odkazy"
    };

    const textEn = {
      homepage: "HomePage",
      history: "History",
      staff: "Staff",
      students: "Students",
      projects: "Projects",
      publications: "Publications",
      courses: "Courses",
      links: "Links"
    };

    return (
      <IntContextConsumer>
        {({ int }) => {
          const text = int === "en" ? textEn : textCz;
          return (
            <Container scrolling={scrolling} className={scrolling}>
              <NavbarToggle onClick={this.toggleMenu} className={menuVisible}>
                <i className="fa fa-bars" />
              </NavbarToggle>

              <ListLink
                to="/"
                menuVisible={menuVisible}
                className={this.props.isIndex ? "active" : ""}
              >
                {text.homepage}
              </ListLink>
              <ListLink
                to="/history/"
                menuVisible={menuVisible}
                className={this.getClass("history")}
              >
                {text.history}
              </ListLink>
              <ListLink to="/staff/" menuVisible={menuVisible} className={this.getClass("staff")}>
                {text.staff}
              </ListLink>
              <ListLink
                to="/students/"
                menuVisible={menuVisible}
                className={this.getClass("students")}
              >
                {text.students}
              </ListLink>
              <ListLink
                to="/projects/"
                menuVisible={menuVisible}
                className={this.getClass("projects")}
              >
                {text.projects}
              </ListLink>
              <NavigationLinkA
                href="http://botzool.sci.muni.cz/publikace/h/"
                target="_blanc"
                rel="noopener"
                className={`${menuVisible} `}
              >
                {text.publications}
              </NavigationLinkA>

              <ListLink
                to="/courses/"
                menuVisible={menuVisible}
                className={this.getClass("courses")}
              >
                {text.courses}
              </ListLink>
              {/* <Li menuVisible={menuVisible} className={this.getClass("gallery")}>
          Galerie
        </Li> */}
              <ListLink to="/links/" menuVisible={menuVisible} className={this.getClass("links")}>
                {text.links}
              </ListLink>
            </Container>
          );
        }}
      </IntContextConsumer>
    );
  }
}

export default Navigation;

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
`;

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
    border-bottom: 3px solid white;
  }

  &.active {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 799px) {
    border: 0px;
  }
`;

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
    border-bottom: 3px solid white;
  }

  &.active {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 799px) {
    border: 0px;
  }
`;

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
`;
