import React from 'react';
import './App.css';
// import pokemons from './data';
import Pokemon from './components/Pokemon'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Pokemon />
    </div>
  )
  }
}

export default App;
