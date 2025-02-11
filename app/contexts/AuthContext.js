'use client'
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [status, setStatus] = useState(0); 

  useEffect(() => {
    const storedStatus = localStorage.getItem('status');
    if (storedStatus) {
      setStatus(Number(storedStatus));
    }
  },[]);

  const logIn = () => {
    localStorage.setItem('status', '1');
    setStatus(1);
  };

  const logOut = () => {
    localStorage.setItem('status', '0');
    localStorage.removeItem('user');  
    // sessionStorage.removeItem('user');
    setStatus(0);
  };

  return (
    <AuthContext.Provider value={{ status, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
