import React from 'react';
import ItemList from './components/ItemList';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <ItemList />
    </div>
  );
}

export default App;
