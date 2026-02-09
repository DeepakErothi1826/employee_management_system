import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localstorage.jsx'

export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    const { employeeData, adminData } = getLocalStorage();
    setUserData({ employeeData, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
