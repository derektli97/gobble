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
    const renderMLHIcon = isWebView && !simple;
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
        <Navbar fixed='top' light color='light' expand='md' style={{ paddingRight: isWebView ? "14vw" : "20px", zIndex: 2 }}>
          <Link to='HomePage' smooth duration={500} >
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
          </Link>
          {
            renderLinks && (
              <React.Fragment>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar style={{ paddingLeft: 0 }}>
                  <Nav className='ml-auto' navbar>
                    <Link to='AboutPage' smooth duration={500} >
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>About</NavLink>
                      </NavItem>
                    </Link>
                    <Link to='SponsorPage' smooth duration={500} offset={-50} >
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>Sponsors</NavLink>
                      </NavItem>
                    </Link>
                    {
                      isWebView &&
                      <Link to='FAQPage' smooth duration={500}>
                        <NavItem>
                          <NavLink style={NavLinkStyle} onClick={this.toggle}>FAQ</NavLink>
                        </NavItem>
                      </Link>
                    }
                    <RouterLink to='/events/' style={RouterLinkStyle}>
                      <NavItem>
                        <NavLink style={NavLinkStyle} onClick={this.toggle}>Events</NavLink>
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
