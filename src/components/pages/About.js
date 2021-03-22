import React from "react";
// import { withTranslation } from "react-i18next";
import config from "./../../config/global-config.js";
import "./../styles/Pages.css";
// import i18n from "./../../config/i18next-config.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    var year = new Date().getFullYear() - 1987;
    year =
      new Date().getMonth() <= 9 && new Date().getDate() < 21 ? --year : year;
    this.state = {
      age: year
    };
  }

  componentDidMount() {
    document.title = "Sobre mi - " + config.personal.es.fullName;
  }

  render() {
    //const { t, i18n } = this.props;

    return (
      <div className="page-main">
        <div className="page-content">
          <div className="page-header">
            <h1>Sobre mí</h1>
            <hr />
          </div>
          <div className="page-welcome">
            <p>
              ¡Bienvenido! Me llamo <strong>{config.personal.es.name}</strong> y
              tengo {this.state.age} años
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
