import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        hello
      </header>
      <Footer />
    </div>
  );
}

export default App;
