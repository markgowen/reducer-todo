import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ToDoList />
    </div>
  );
}

export default App;
