import { createSlice } from '@reduxjs/toolkit'

import { ITodo } from '../utils/todo'

const initialTaskList: ITodo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Your first task',
    done: false
  }
]

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: initialTaskList
  },
  reducers: {
    addNewTask: (state, { payload }) => {
      state.taskList.unshift(payload)
    },
    updateTaskStatusFromState: (state, { payload }) => {
      state.taskList = state.taskList.map(task => 
        task.id !== payload.taskId ? 
          task : 
          {
            ...task,
            done: !task.done
          }
      )
    },
    updateTaskDetailFromState: (state, { payload }) => {
      state.taskList = state.taskList.map(task => 
        task.id !== payload.id ? 
          task :
          payload
      )
    },
    deleteTaskFromState: (state, { payload }) => {
      state.taskList = state.taskList.filter(task => task.id !== payload.id)
    }
  }
})

export const {
  addNewTask,
  updateTaskStatusFromState,
  updateTaskDetailFromState,
  deleteTaskFromState
} = tasksSlice.actions

export default tasksSlice.reducer