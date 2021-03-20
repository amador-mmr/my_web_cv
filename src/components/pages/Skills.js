import React from "react";

class Skills extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    document.title = "Habilidades - Amador Moreno";
  }

  render() {
    return (
      <div className="page-main">
        <div className="page-content">
          <div className="page-header">
            <h1>Habilidades</h1>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
