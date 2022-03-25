import React from 'react';
import './App.css';
import {Todolist} from './components/Todolist';

function App() {

  const tasks = [
    {id: 1, title: "Html & Css", isDone: true},
    {id: 2, title: "JavaScript", isDone: true},
    {id: 3, title: "React", isDone: false},
  ]

  return (
    <div className="App">
      <Todolist title='What to learn?' tasks={tasks}/>
    </div>
  );
}

export default App;
