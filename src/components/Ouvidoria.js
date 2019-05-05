import React, { Component } from "react";
import "./Ouvidoria.css";
import DefaultForm from "./Form/DefaultForm";
import IcognitoForm from "./Form/IcognitoForm";

export default class Ouvidoria extends Component {
  constructor() {
    super();
    this.state = {
      apiUri: "http://localhost/opennet-api/",
      icognitoMode: false
    };
  }
  render() {
    return (
      <div className="form-container w-100">
        <div className="d-flex align-items-center">
          <div>
            <h1>Ouvidoria OpenNet</h1>
            <p>Deixe sua sugestão, contribua para um curso melhor.</p>
          </div>
        </div>
        <div>
          <button
            className="btn btnSwitchMode"
            data-targets="form"
            onClick={this.toggle.bind(this)}
          >
            Sugestão anônima
          </button>
          <div className="forms-container py-3">
            {!this.state.icognitoMode ? (
              <DefaultForm apiUri={this.state.apiUri} />
            ) : (
              <IcognitoForm apiUri={this.state.apiUri} />
            )}
          </div>
        </div>
      </div>
    );
  }

  toggle() {
    document.body.classList.toggle("icognito-mode");
    this.setState({ icognitoMode: !this.state.icognitoMode });
  }
}
