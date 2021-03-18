import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import About from "./components/pages/About";
import Training from "./components/pages/Training";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/formacion" component={Training} />
          <Route path="/experiencia" component={Experience} />
          <Route path="/habilidades" component={Skills} />
        </Switch>
      </Layout>
    );
  }
}
export default App;
