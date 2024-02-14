import React, { Component } from 'react'

export default class People extends Component {
  render() {
const { people } = this.props;
const peopleList = people.map(person =>{

  return (
    <div className='person' key={person.id}>

    {/* takes dynamic values */}
      <div>Name: { person.name }</div>
      <div>Age: { person.age }</div>
      <div>FavColor: { person.favColor }</div>
      <br />
    </div>
  )

})
return (
    <div className="person-list">
      {peopleList}
    </div>
)
}
}