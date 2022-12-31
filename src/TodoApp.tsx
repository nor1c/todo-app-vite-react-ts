import { useState } from 'react'

import AddTodo from './AddTodo'
import TaskList from './TaskList'
import { ITodo } from './utils/todo'

export default function TodoApp() {
  const [id, setId] = useState<number>(1)
  const [tasks, setTasks] = useState<ITodo[]>([])

  const handleNewTodo = (newTodo: string) => {
    setId(id + 1)
    
    setTasks([
      ...tasks,
      {
        id,
        title: newTodo,
        done: false
      }
    ])
  }

  return (
    <div className="gap-2 w-2/4 mx-auto rounded-md mt-6 bg-gray-100 p-6 items-center text-center">
      <h2 className="text-lg font-semibold">Simple Todo App</h2>
      
      <div className='mt-10 flex flex-col gap-2'>
        <AddTodo
          onAdd={handleNewTodo}
        />
        <TaskList
          tasks={tasks}
        />
      </div>
    </div>
  )
}