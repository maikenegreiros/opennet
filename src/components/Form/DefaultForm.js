import React from "react";
import Form from "./Form";

export default class DefaultForm extends Form {
  render() {
    return (
      <form
        action={this.props.apiUri}
        method="POST"
        className="form active"
        onSubmit={event => this.sendForm(event)}
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Nome"
            name="name"
          />
        </div>
        <div className="form-group">
          <select className="form-control" name="semester">
            <option value="">Semestre</option>
            <option value="1">1º Semestre</option>
            <option value="2">2º Semestre</option>
            <option value="3">3º Semestre</option>
            <option value="4">4º Semestre</option>
            <option value="5">5º Semestre</option>
            <option value="6">6º Semestre</option>
          </select>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Sugestão..."
            name="suggestion"
          />
        </div>
        <input type="submit" className="btn w-100" />
      </form>
    );
  }
}
