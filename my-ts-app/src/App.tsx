import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { EmployeeRecord } from './Pages/EmployeeRecord';
import { SearchUser } from './Pages/SearchUser';
import { Namespliting } from './Pages/Namespliting';
import { UseReferance } from './Pages/UseReferance';
import { Signup } from './Pages/Auth/Signup';

function App() {
  return (
    <div className="">
      {/* <UseReferance/> */}
     <Signup backgoundPics="./Screenshot.png"/>
     {/* <div className="container my-5"><EmployeeRecord/></div>
     <div className="container my-5"><SearchUser/> </div> */}
     {/* <div className="container my-5"><Namespliting/> </div> */}
    </div>
  );
}

export default App
