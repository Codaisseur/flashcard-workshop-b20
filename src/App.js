import React, { Component } from 'react'
import DecksContainer from './components/DecksContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flash Cards</h1>
        <DecksContainer />
      </div>
    )
  }
}

export default App
