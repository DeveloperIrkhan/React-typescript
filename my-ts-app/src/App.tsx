import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { EmployeeRecord } from './Pages/EmployeeRecord';
import { SearchUser } from './Pages/SearchUser';

function App() {
  return (
    <div className="App">
     <div className="container my-5"><EmployeeRecord/></div>
     <div className="container my-5"><SearchUser/> </div>
    </div>
  );
}

export default App;
