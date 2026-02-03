import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localstorage'

const App = () => {

  const [user, setUser] = useState(null);

  const handelLogin = (email, password) => {
    if (email == "admin@123.com" && password == "admin123") {
      setUser("admin");
    }
    else if (email == "employee@123.com" && password == "employee123") {
      setUser("employee");
    }
    else {
      alert("Invalid Credentials")
    }


  }
  // useEffect(() => {
  //   // setLocalStorage();
  //    getLocalStorage();
  // },);

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ''}
      {user == "admin" ? <AdminDashboard /> : ''}
      {user == "employee" ? <EmployeeDashboard /> : ''}

    </>
  )
}

export default App
