import React from 'react';
import './App.css';
import { Authorization } from './components/Authorization/Authorization';
import { MainContent } from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <MainContent />
      {/* <Authorization /> */}
    </div>
  );
}

export default App;
