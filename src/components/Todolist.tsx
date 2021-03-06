import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from '../App';

type PropsType = {
  title: string
  tasks: Array<TasksPropsType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}

export type TasksPropsType = {
  id: string
  title: string
  isDone: boolean
}

export function Todolist(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.code === 'Enter') {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  }
  const addTask = () => {
    props.addTask(newTaskTitle)
    setNewTaskTitle(' ')
  }
  const onAllClickHandler = () => props.changeFilter('all')
  const onActiveClickHandler = () => props.changeFilter('active')
  const onCompletedClickHandler = () => props.changeFilter('completed')


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTask}>+</button>
      </div>

      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>

      <ul>
        {props.tasks.map((t) => {
          const onRemoveHandler = () => props.removeTask(t.id)
          return (
            <li key={t.id}>
              <button onClick={onRemoveHandler}>X</button>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
            </li>
          )
        })}
      </ul>
    </div>

  )
}