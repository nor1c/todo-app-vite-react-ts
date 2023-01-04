import { useState } from 'react'

import AddTodo from './AddTodo'
import { RootState } from './stores'
import {
    addNewTask, deleteTaskFromState, getNumberOfTasks, updateTaskDetailFromState,
    updateTaskStatusFromState
} from './stores/todo.store'
import TaskList from './TaskList'
import { useAppDispatch, useAppSelector } from './utils/app/hooks'
import { ITodo } from './utils/todo'

export default function TodoApp() {
  const dispatch = useAppDispatch()

  // init data
  const taskCounter = useAppSelector(getNumberOfTasks)
  const tasksState = useAppSelector((state: RootState) => state.tasks.taskList)

  const [tasks, setTasks] = useState<ITodo[]>(tasksState)

  // create a new task
  const createNewTask = (newTask: string) => {
    dispatch(
      addNewTask({
        id: crypto.randomUUID(),
        title: newTask,
        done: false
      })
    )

    // ! using useState()
    // const isExist = tasks.some(task => task.title === newTask)

    // if (!isExist) {
    //   setTasks([
    //     {
    //       id: id.current++,
    //       title: newTask,
    //       done: false
    //     },
    //     ...tasks,
    //   ])
    // } else {
    //   alert('Task exist')
    // }
  }

  // change task status
  const changeTaskStatus = (taskId: ITodo['id']) => {
    dispatch(
      updateTaskStatusFromState(taskId)
    )

    // ! useState()
    // setTasks(tasks.map(task => {
    //   return task.id !== taskId ? task : {
    //     ...task,
    //     done: !task.done
    //   }
    // }))
  }

  // update task data
  const updateTask = (taskData: ITodo) => {
    dispatch(
      updateTaskDetailFromState(taskData)
    )

    // setTasks(tasks.map(task => {
    //   return task.id !== taskData.id ? task : {
    //     ...task,
    //     taskData
    //   }
    // }))
  }

  // delete task
  const deleteTask = (taskId: ITodo['id']) => {
    dispatch(
      deleteTaskFromState(taskId)
    )

    // ! useState()
    // setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="gap-2 items-center p-6 mx-auto mt-6 w-full text-center bg-gray-100 rounded-md lg:w-2/4">
      <h2 className="text-lg font-semibold">Simple Todo App</h2>
      
      <div className='flex flex-col gap-2 mt-10'>
        <div className='flex flex-row justify-between'>
          <AddTodo
            onAdd={createNewTask}
          />
          <span>{taskCounter.done} task{taskCounter.done > 1 ? 's' : ''} done out of {taskCounter.all} tasks, {taskCounter.unfinished} task{taskCounter.unfinished > 1 ? 's' : ''} unfinished</span>
        </div>
        <TaskList
          tasks={tasksState}
          onChangeTaskStatus={changeTaskStatus}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  )
}