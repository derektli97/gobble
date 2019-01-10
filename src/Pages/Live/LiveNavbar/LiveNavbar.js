import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from "reactstrap";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    if (!this.props.isWebView) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }
  render () {
    const { isWebView, simple } = this.props;

    // Logic for rendering links and the MLH Icon.
    const renderMLHIcon = false;
    const renderLinks = !simple;

    const { NavLinkStyle } = {
      NavLinkStyle: {
        fontSize: "18px",
        paddingLeft: isWebView ? "2vw" : "7vw",
        color: "#666"
      }
    };

    const { RouterLinkStyle } = {
      RouterLinkStyle: {
        textDecoration: "none"
      }
    };

    return (
      <React.Fragment>
        <Navbar fixed='top' light color='light' expand='md' style={{ paddingRight: isWebView ? "2vw" : "20px", zIndex: 2 }}>
          <RouterLink to='/' smooth duration={500} >
            <NavbarBrand>
              <img
                alt=''
                src={require("assets/th.svg")}
                style={{
                  height: "30px",
                  paddingLeft: "7vw"
                }}
              />
            </NavbarBrand>
          </RouterLink>
          {
            renderLinks && (
              <React.Fragment>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar style={{ paddingLeft: 0 }}>
                  <Nav className='ml-auto' navbar style={{ marginRight: 0 }}>
                    <Link to='AboutPage' smooth duration={500} >
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>Welcome</NavLink>
                      </NavItem>
                    </Link>
                    <RouterLink to='/schedule' style={RouterLinkStyle} >
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>Schedule</NavLink>
                      </NavItem>
                    </RouterLink>
                    <RouterLink to='/maps/' style={RouterLinkStyle}>
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>Maps</NavLink>
                      </NavItem>
                    </RouterLink>
                    <RouterLink to='/prizes/' style={RouterLinkStyle}>
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>Prizes</NavLink>
                      </NavItem>
                    </RouterLink>
                  </Nav>
                </Collapse>
              </React.Fragment>
            )
          }
          {
            renderMLHIcon &&
            (
              <a href='https://mlh.io/seasons/na-2019/events' target='_blank'>
                <img
                  alt=''
                  src={require("assets/MLHLogo.svg")}
                  style={{
                    position: "fixed",
                    zIndex: "1",
                    width: "100px",
                    left: "88vw",
                    top: 0
                  }}
                />
              </a>
            )
          }
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
