import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeToggler';

const AppContainer = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const containerStyles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return <div style={containerStyles}>{children}</div>;
};

export default AppContainer;
