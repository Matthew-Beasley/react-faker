import React from 'react';
import './App.css';
import fakeData from './fakeData';
const { userList, companyList } = fakeData;

//user.company
//company.companyName
function App () {
  const greeting = 'faker data'

  console.log(userList, companyList)
  return ( 
    <div className="App">     
      <h2>{greeting.toUpperCase()}</h2>
      <hr></hr>
      <ul>
        {userList.map(user => {
          return (<li key={user.id}>{user.name} from {user.state}
            works for {companyList.find(company => company.id === user.id).name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
