import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from './components/Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

  const [tasks, setTasks] = useState<Array<TasksPropsType>>([
    {id: 1, title: "Html & Css", isDone: true},
    {id: 2, title: "JavaScript", isDone: true},
    {id: 3, title: "React", isDone: false},
    {id: 4, title: "Redux", isDone: false},
  ]);

  const [filter, setFilter] = useState<FilterValuesType>('all');

  const removeTask = (id: number) => {
    const filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks);
  }

  let tasksForTodolist = tasks;
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter(t => t.isDone)
  } else if (filter === 'active') {
    tasksForTodolist = tasks.filter(t => !t.isDone)
  }

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  }

  return (
    <div className="App">
      <Todolist
        title='What to learn?'
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
