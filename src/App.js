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
          return (<li key={user.userId}>{user.name} from {user.state} works 
          for {companyList.reduce((acc, company) => {
            if (company.companyId === user.company) {
              acc += ` ${company.name}`;
            }
            return acc;
          }, '')}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
