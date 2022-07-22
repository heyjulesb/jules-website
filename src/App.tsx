import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { routes as pageRoutes } from '../src/pages/routes';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {pageRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
        </Routes>
        <Footer />
    </>
  );
};

export default App;