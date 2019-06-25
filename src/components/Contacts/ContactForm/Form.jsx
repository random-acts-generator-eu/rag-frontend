import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    closeness: 0
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form className="contact-form">
          <h2> Add a New Contact to Your List</h2>

          <div className="input-field">
            <div className="input-box">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="radio-form">
              <div>
                <label htmlFor="1">1</label>
                <input
                  type="radio"
                  name="closeness"
                  id="closeness"
                  value="1"
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="2">2</label>
                <input
                  type="radio"
                  name="closeness"
                  id="closeness"
                  value="2"
                  onChange={this.handleInputChange}
                />
              </div>
              <div />
              <label htmlFor="3">3</label>
              <input
                type="radio"
                name="closeness"
                id="closeness"
                value="3"
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <button type="submit">Add Contact</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
