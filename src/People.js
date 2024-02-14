import React from 'react'

const People = ({people}) => {

  const peopleList = people.map(person => {
    if(person.age > 20){
    return (
      <div className="person" key={person.id}>
        {/* takes dynamic values */}
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <div>FavColor: {person.favColor}</div>
        <br />
      </div>
    );
    } else {
      return null;
    } 
  });

  return <div className="person-list">{peopleList}</div>;

}
export default People