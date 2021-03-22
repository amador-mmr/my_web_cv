import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import About from "./components/pages/About";
import Training from "./components/pages/Training";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import "./App.css";
import { Button, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ["es", "en"],
      selectLanguage: "es",
      textlng: ["Español", "English"],
      textSelected: "English"
    };
  }

  render() {
    //let btnLng = (this.state.selectLanguage = "es") ? this.

    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/formacion" component={Training} />
          <Route path="/experiencia" component={Experience} />
          <Route path="/habilidades" component={Skills} />
        </Switch>
        <div className="btn-change-lng">
          <DropdownButton title="Lenguaje" variant="info">
            <DropdownItem>Español</DropdownItem>
            <DropdownItem>English</DropdownItem>
          </DropdownButton>
          {/* <Button variant="info">{this.state.textSelected}</Button> */}
        </div>
      </Layout>
    );
  }
}
export default App;
