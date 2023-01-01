export interface ITodoInput {
  title: string
}

export interface ITodo extends ITodoInput {
  id: string
  done: boolean
}

export interface ITaskList {
  onChangeTaskStatus: (taskId: ITodo['id']) => void
  onUpdateTask: (taskData: ITodo) => void
  onDeleteTask: (taskId: ITodo['id']) => void
}