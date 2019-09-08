import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component' 

import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bosses: [],
      searchField: ''
    }
  }

  componentDidMount() {
  fetch('/bosses.json')
      .then(response => response.json())
      .then(bosses => this.setState({ bosses }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // not modifying the state so that other components which require all of the bosses wont break
    const filteredBosses = this.state.bosses.filter(({ name }) => {
      return name
              .toLowerCase()
              .includes(this.state.searchField.toLowerCase())
    }) 

    return (
      <div className='App'>
        <h1>Cuphead Bosses</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder={'Search'}
        />
        <CardList bosses={filteredBosses} />
      </div>
    );
  }
}

export default App;
