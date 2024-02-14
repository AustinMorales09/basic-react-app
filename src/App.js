import React, { Component } from 'react'
import People from './People'


export default class App extends Component {

  state = {
    people: [
      {name: 'Austin', age: 25, favColor: 'Blue', id: 1},
      {name: 'Spencer', age: 31, favColor: 'Red', id: 2},
      {name: 'Chris', age: 50, favColor: 'Purple', id: 3}
    ]
  }

  render() {
    return (
      <div className="App">
      <h1>My First React App</h1>
      <p>Hey there!</p>
      <People people={this.state.people}/>
    </div>
    )
  }
}
