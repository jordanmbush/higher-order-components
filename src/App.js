import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import ContactsApp from './components/ContactsApp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    }
  }
  
  componentDidMount() {
    axios.get('https://api.randomuser.me/?nat=us,gb&results=50').then(response => response.data.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail
      }
    ))).then(contacts => this.setState({contacts}));
  }
  render() {
    return (
      <div className="App">
        <ContactsApp contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
