import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.get(`/users?user=${this.state.value}`)
    .then((data) => {
      for (let key in data.data) {
        this.setState({
          key: data.data[key]
        })
      }
    })
    .then(() => {

    })
    
  }

  componentDidUpdate() {
    if (this.state.value.length > 1) {

    }
  }

  render() {
    let imgSrc = 'https://picsum.photos/200/300';
    return (
      <div className="App">
        <h1>GitHub Hack!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
          Git User:
            <input type="text" value={this.state.value} onChange={this.handleChange} name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <center>
					<img src= {imgSrc} alt="pic" />
				</center>
      </div>

    );
  }
}

export default App;
