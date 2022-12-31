export interface ITodo {
  id: number
  title: string
  done: boolean
}

export interface ITaskList {
  changeTaskStatus: (taskId: ITodo['id']) => void,
  onDeleteTask: (taskId: ITodo['id']) => void
}