import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { CharacterProvider } from './context/Character/Provider';
import logo from './logo.svg';
import { Create, Edit, List, Show } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>
      </header>
      <CharacterProvider>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/:name/edit" element={<Edit />} />
          <Route path="/:name" element={<Show />} />
          <Route path="/" element={<List />} />
        </Routes>
      </CharacterProvider>
    </div>
  );
};

export default App;
