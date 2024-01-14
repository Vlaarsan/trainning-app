// UserInfoContext.js
import React, { createContext, useContext, useState } from 'react';

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');

  return (
    <UserInfoContext.Provider value={{ nickname, setNickname, age, setAge }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};
