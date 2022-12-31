import { useState } from 'react'

import AddTodo from './AddTodo'
import TaskList from './TaskList'
import { ITodo } from './utils/todo'

let id: number = 1

export default function TodoApp() {
  const [tasks, setTasks] = useState<ITodo[]>([])

  const handleNewTodo = (newTodo: string) => {
    const isExist = tasks.some(task => task.title === newTodo)

    if (!isExist) {
      setTasks([
        {
          id: id++,
          title: newTodo,
          done: false
        },
        ...tasks,
      ])
    } else {
      alert('Task exist')
    }
  }

  const changeTaskStatus = (taskId: ITodo['id']) => {
    setTasks(tasks.map(task => {
      return task.id !== taskId ? task : {
        ...task,
        done: !task.done
      }
    }))
  }

  const deleteTask = (taskId: ITodo['id']) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="gap-2 items-center p-6 mx-auto mt-6 w-full lg:w-2/4 text-center bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">Simple Todo App</h2>
      
      <div className='flex flex-col gap-2 mt-10'>
        <AddTodo
          onAdd={handleNewTodo}
        />
        <TaskList
          tasks={tasks}
          changeTaskStatus={changeTaskStatus}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  )
}