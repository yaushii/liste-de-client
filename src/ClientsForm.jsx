import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = event => {
    this.setState({ nouveauClient: event.currentTarget.value });

    console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClick({ id, nom });
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauClient}
          type="text"
          placeholder="Ajouter un client"
          onChange={this.handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
