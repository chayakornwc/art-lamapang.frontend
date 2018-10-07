import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
 } from 'reactstrap';

export default class Navigationbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props.brand)
    return (
      <div>
        <Navbar color="#fff" light expand="md">
          <NavbarBrand href="/"><img src={this.props.brand} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Statistic</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">About us</NavLink>
              </NavItem>
                <NavItem>
                    <div>
                <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append">
                    <InputGroupText><i className="fas fa-search"/></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                    </div>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}