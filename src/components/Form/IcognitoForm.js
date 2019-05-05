import React from "react";
import Form from "./Form";

export default class IcognitoForm extends Form {
  render() {
    return (
      <form
        action={this.props.apiUri}
        className="form"
        onSubmit={this.sendForm}
      >
        <div className="form-group">
          <textarea className="form-control" placeholder="Sugestão..." />
        </div>
        <input type="submit" className="btn w-100" />
      </form>
    );
  }
}
