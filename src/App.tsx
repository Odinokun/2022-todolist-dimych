import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {TasksPropsType, Todolist} from './components/Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

  const [tasks, setTasks] = useState<Array<TasksPropsType>>([
    {id: v1(), title: "Html & Css", isDone: true},
    {id: v1(), title: "JavaScript", isDone: true},
    {id: v1(), title: "React", isDone: false},
    {id: v1(), title: "Redux", isDone: false},
  ]);

  const [filter, setFilter] = useState<FilterValuesType>('all');

  const removeTask = (id: string) => {
    const filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks);
  }

  const addTask = (title:string) => {
    const newTask = {id: v1(), title: title, isDone: false}
    setTasks([newTask, ...tasks])
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
        addTask={addTask}
      />
    </div>
  );
}

export default App;
