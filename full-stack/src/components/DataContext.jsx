import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [email, setEmail] = useState('hello');

  return (
    <DataContext.Provider value={{ email, setEmail }}>
      {children}
    </DataContext.Provider>
  );
};
