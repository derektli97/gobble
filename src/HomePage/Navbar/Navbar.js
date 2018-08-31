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
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    const { isWebView } = this.props;

    const styles = {
      NavLinkStyle: {
        fontSize: "18px",
        paddingLeft: this.props.isWebView ? "2vw" : "7vw",
        color: "#666"
      }
    };
    const { NavLinkStyle } = styles;
    return (
      <React.Fragment>
        <Navbar fixed='top' light color='light' expand='md' style={{ paddingRight: isWebView ? "14vw" : "20px", zIndex: 2 }}>
          <Link to='HomePage' smooth duration={500} >
            <NavbarBrand>
              <img
                alt=''
                src={require("../../assets/th.svg")}
                style={{
                  height: "30px",
                  paddingLeft: "7vw"
                }}
              />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={{ paddingLeft: 0, paddingTop: "15px" }}>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink style={NavLinkStyle} onClick={this.toggle}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={NavLinkStyle} onClick={this.toggle}>FAQ</NavLink>
              </NavItem>

              <Link to='SponsorPage' smooth duration={500} >
                <NavItem>
                  <NavLink style={NavLinkStyle} onClick={this.toggle}>Sponsors</NavLink>
                </NavItem>
              </Link>
              <NavItem>
                <NavLink style={NavLinkStyle} onClick={this.toggle}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          {
            this.props.isWebView &&
            (
              <img
                alt=''
                src={require("../../assets/MLHLogo.svg")}
                style={{
                  position: "fixed",
                  zIndex: "2",
                  width: "10vw",
                  height: "27vh",
                  left: "88vw",
                  top: 0
                }}
              />
            )
          }
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
