import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
