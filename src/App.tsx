import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Create, Edit, List, Show } from './pages';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>
      </header>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/:name/edit" element={<Edit />} />
        <Route path="/:name" element={<Show />} />
        <Route path="/" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
