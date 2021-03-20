import React from "react";
//import { Image } from "react-bootstrap";
import "./../styles/Pages.css";

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
    document.title = "Sobre mi - Amador Moreno";
  }

  render() {
    return (
      <div className="page-main">
        <div className="page-content">
          <div className="page-header">
            <h1>Sobre mi</h1>
            <hr />
          </div>
          {/* <div>
            <Image src="" /> 
          </div> */}
          <div className="page-welcome">
            <p>
              ¡Bienvenido! Me llamo <strong>Amador</strong> y tengo{" "}
              {this.state.age} años
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
