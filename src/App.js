import React from 'react';
import './App.css';
import data from './data';
const { users, catData } = data;

console.log(catData);  //I'm getting a promise here as expected because 
                      //this isn't waiting for fetchData in the data module
                      //to complete

async function App () {
  const greeting = 'starwars data'
  const data = await catData; //when I try to await fetchData() from the data module to complete
  console.log(data);          // I get a react error 'Objects are not valid as a React child'
  return ( 
    <div className="App">     
      <h2>{greeting.toUpperCase()}</h2>
      <hr></hr>

    </div>
  );
}

export default App;
