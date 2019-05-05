import React from "react";

export default class Form extends React.Component {
  sendForm(event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    })
      .then(response => response.text())
      .then(text => console.log(text));
  }
}
