import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
    </header>
  );
};

export default Header;
