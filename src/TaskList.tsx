import RegularButton from './components/buttons/RegularButton'
import { ITaskList, ITodo } from './utils/todo'

const TaskList: React.FC<ITaskList & {
  tasks: ITodo[]
}> = ({ tasks, changeTaskStatus, onDeleteTask }): any => {
  return (
    tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        changeTaskStatus={changeTaskStatus}
        onDeleteTask={onDeleteTask}
      />
    ))
  )
}

const Task: React.FC<ITaskList & {
  task: ITodo
}> = ({ task, changeTaskStatus, onDeleteTask }) => {
  return (
    <div 
      className={
        `flex flex-row gap-2 justify-between p-2 align-middle rounded-md 
        ${!task.done ? 'bg-blue-100' : 'bg-green-100'}`
      }
    >
      <label className='flex flex-row gap-2 p-2 w-full cursor-pointer'>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            changeTaskStatus(task.id)
          }}
        />
        {task.title}
      </label>

      <div className='flex flex-row gap-2'>
        <RegularButton
          text='Edit'
          onClick={() => {}}
          className="hover:bg-yellow-600"
        />
        
        <RegularButton
          text='Delete'
          onClick={() => {
            onDeleteTask(task.id)
          }}
          className="hover:bg-red-500"
        />
      </div>
    </div>
  )
}

export default TaskList