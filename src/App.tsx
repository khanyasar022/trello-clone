import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import BoardBar from './components/BoardBar';
import BoardContent from './components/BoardContent';

function App() {
  return (
    <div className="h-screen grid grid-rows-[40px_50px_1fr] leading-5 bg-sky-600 ">
        <AppBar />
        <BoardBar />
        <BoardContent />
    </div>
  );
}

export default App;
