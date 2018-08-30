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
    return (
      <React.Fragment>
        <Navbar fixed='top' light color='light' expand='md' style={{ paddingRight: "16vw", zIndex: 2 }}>
          <Link to='HomePage' smooth duration={500} >
            <NavbarBrand>
              <img
                alt=''
                src={require("../../assets/THLogo.svg")}
                style={{
                  height: "30px",
                  paddingLeft: "4vh"
                }}
              />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>FAQ</NavLink>
              </NavItem>

              <Link to='SponsorPage' smooth duration={500} >
                <NavItem>
                  <NavLink>Sponsors</NavLink>
                </NavItem>
              </Link>
              <NavItem>
                <NavLink>Contact</NavLink>
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
