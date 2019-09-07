import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bosses: []
    }
  }

  componentDidMount() {
    fetch('/bosses.json')
      .then(response => response.json())
      .then(bosses => this.setState({ bosses }))
  }

  render() {
    return (
      <div className='App'>
      <CardList bosses={this.state.bosses} />
      </div>
    );
  }
}

export default App;
