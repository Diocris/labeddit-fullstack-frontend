import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

  const [isLogged, setIsLogged] = useState(false)
  
  const [loggedIn, setLoggedIn] = useState(isLogged)
  
  const [refresh, setRefresh] = useState(false)

  
  useEffect(()=>{
    setTimeout(() => {
      
          const logged = JSON.parse(localStorage.getItem('isLogged'))
        
          setIsLogged(logged)
    
    }, 10);

  },[])
  
  useEffect(()=>{
    setTimeout(() => {
        setLoggedIn(isLogged)
      
    }, 10);
  
  },[isLogged, setIsLogged])
  
  
  return (
    <AppContext.Provider
      value={{loggedIn, setLoggedIn, refresh, setRefresh }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider};
