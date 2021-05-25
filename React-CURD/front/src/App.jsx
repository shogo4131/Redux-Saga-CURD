import React, { useCallback } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = () => {
  const useClickButton = () => console.log('success');

  return (
    <>
      <Header />
      <Search clickSearch={useClickButton} />
    </>
  );
};

export default App;
