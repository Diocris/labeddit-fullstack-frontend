import React, { createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

    
  return (
    <AppContext.Provider
      value={{ }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider};
