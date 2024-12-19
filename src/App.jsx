import React from 'react';
import Header from './components/Header';
import ThemeToggler from './components/ThemeToggler';
import AppContainer from './components/AppContainer';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ThemeToggler />
    </AppContainer>
  );
};

export default App;
