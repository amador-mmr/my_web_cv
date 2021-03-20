import React from "react";

class Experience extends React.Component {
  componentDidMount() {
    document.title = "Experiencia profesional - Amador Moreno";
  }

  render() {
    return (
      <div className="page-main">
        <div className="page-content">
          <div className="page-header">
            <h1>Experiencia</h1>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
