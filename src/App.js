import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import About from "./components/pages/About";
import Training from "./components/pages/Training";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import "./App.css";

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
    return (
      <Layout>
        <Switch>
          <Route exact path="/personal" component={About} />
          <Route path="/formacion" component={Training} />
          <Route path="/experiencia" component={Experience} />
          <Route path="/habilidades" component={Skills} />
        </Switch>
      </Layout>
    );
  }
}
export default App;
