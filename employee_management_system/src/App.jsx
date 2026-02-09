import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localstorage'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const AuthData = useContext(AuthContext);
 
  useEffect (() => {
    if(AuthData){
      const loggedInUser = localStorage.getItem("loggedInUser");
      setUser(loggedInUser.role)
    }
  }, []);

  const handelLogin = (email, password) => {
    if (AuthData && AuthData.adminData.some(admin => admin.email ===email && admin.password ===password)) {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'admin' }));
    }
    else if (AuthData) {
      const employee = AuthData.employeeData.find(emp => emp.email === email && emp.password === password);
      if (employee) {
         setUser("employee");
         setLoggedInUser(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'employee' }));
      }
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
      {user == "employee" ? <EmployeeDashboard data ={loggedInUser} /> : null}

    </>
  )
}

export default App
