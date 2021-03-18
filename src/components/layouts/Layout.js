import { Component } from "react";
import { Container } from "react-bootstrap";
import Menu from "../menus/Menu";
import "./../styles/Layout.css";

class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <Menu />
        {this.props.children}
      </Container>
    );
  }
}
export default Layout;
