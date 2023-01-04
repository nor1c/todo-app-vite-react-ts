import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITodo } from '../utils/todo'
import { RootState } from './'

const initialTaskList: ITodo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Your first task',
    done: false
  }
]

export const taskStore = createSlice({
  name: 'tasks',
  initialState: {
    taskList: initialTaskList
  },
  reducers: {
    addNewTask: (state, { payload }) => {
      state.taskList.unshift(payload)
    },
    updateTaskStatusFromState: (state, action: PayloadAction<ITodo['id']>) => {
      state.taskList = state.taskList.map(task => 
        task.id !== action.payload ? 
          task : 
          {
            ...task,
            done: !task.done
          }
      )
    },
    updateTaskDetailFromState: (state, action: PayloadAction<ITodo>) => {
      state.taskList = state.taskList.map(task => 
        task.id !== action.payload.id ? 
          task :
          action.payload
      )
    },
    deleteTaskFromState: (state, action: PayloadAction<ITodo['id']>) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload)
    }
  }
})

export const {
  addNewTask,
  updateTaskStatusFromState,
  updateTaskDetailFromState,
  deleteTaskFromState
} = taskStore.actions

export default taskStore.reducer

// // non memoized
// export function getNumberOfTasks(state: RootState) {
//   console.log('getting non memoized task counter..')
//   const totalTasks = state.tasks.taskList.length
//   const totalFinishedTasks = state.tasks.taskList.filter(task => task.done === true).length
//   const totalUnfinishedTasks = totalTasks-totalFinishedTasks

//   return {
//     all: totalTasks,
//     done: totalFinishedTasks,
//     unfinished: totalUnfinishedTasks
//   }
// }

// memoizing with @reduxjs/toolkit.createSelector()
export const getNumberOfTasks = createSelector(
  (state: RootState) => state.tasks.taskList,
  (tasks) => {
    console.log('getting memoized task counter..')
    const totalTasks = tasks.length
    const totalFinishedTasks = tasks.filter(task => task.done === true).length
    const totalUnfinishedTasks = totalTasks-totalFinishedTasks

    return {
      all: totalTasks,
      done: totalFinishedTasks,
      unfinished: totalUnfinishedTasks
    }
  }
)