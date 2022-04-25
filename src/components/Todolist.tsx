import React, {useState} from 'react';
import {FilterValuesType} from '../App';

type PropsType = {
  title: string
  tasks: Array<TasksPropsType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title:string) => void
}

export type TasksPropsType = {
  id: string
  title: string
  isDone: boolean
}

export function Todolist(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle} onChange={(e) => {
          setNewTaskTitle(e.currentTarget.value)
        }}/>
        <button onClick={()=>{
          props.addTask(newTaskTitle)
          setNewTaskTitle(' ')
        }}>+</button>
      </div>
      <div>
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>
              <button onClick={() => props.removeTask(t.id)}>X</button>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
            </li>
          )
        })}
      </ul>
    </div>

  )
}