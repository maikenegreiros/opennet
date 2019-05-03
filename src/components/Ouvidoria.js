import React, { Component } from "react";
import "./Ouvidoria.css";

export default class Ouvidoria extends Component {
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
            onClick={this.switchForm}
          >
            Sugestão anônima
          </button>
          <div className="forms-container py-3">
            <form className="form active">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nome"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  list="semester-list"
                  placeholder="Semestre"
                />
                <datalist id="semester-list">
                  <option value="1º Semestre" />
                  <option value="2º Semestre" />
                  <option value="3º Semestre" />
                  <option value="4º Semestre" />
                  <option value="5º Semestre" />
                  <option value="6º Semestre" />
                </datalist>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Sugestão..." />
              </div>
              <input type="submit" className="btn w-100" />
            </form>
            <form className="form d-none">
              <div className="form-group">
                <textarea className="form-control" placeholder="Sugestão..." />
              </div>
              <input type="submit" className="btn w-100" />
            </form>
          </div>
        </div>
      </div>
    );
  }

  switchForm() {
    console.log("click");
    const switcher = document.querySelector(".btnSwitchMode");
    const containers = document.querySelectorAll(
      `.${switcher.dataset.targets}`
    );

    document.body.classList.toggle("icognito-mode");
    containers.forEach(container => {
      container.classList.toggle("d-none");
    });
  }
}
