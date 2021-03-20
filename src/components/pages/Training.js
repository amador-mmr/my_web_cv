import React from "react";

class Training extends React.Component {
  componentDidMount() {
    document.title = "Formación - Amador Moreno";
  }

  render() {
    return (
      <div className="page-main">
        <div className="page-content">
          <div className="page-header">
            <h1>Formación</h1>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default Training;
