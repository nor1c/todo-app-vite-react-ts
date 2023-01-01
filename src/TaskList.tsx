import { ReactElement, useState } from 'react'

import RegularButton from './components/buttons/RegularButton'
import { ITaskList, ITodo } from './utils/todo'

const TaskList: React.FC<ITaskList & {
  tasks: ITodo[]
}> = ({ tasks, onChangeTaskStatus, onUpdateTask, onDeleteTask }): any => {
  return (
    tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        onChangeTaskStatus={onChangeTaskStatus}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    ))
  )
}

const Task: React.FC<ITaskList & {
  task: ITodo
}> = ({ task, onChangeTaskStatus, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [state, setState] = useState(task)

  let taskContent: ReactElement<any, any> | undefined = undefined
  if (!isEditing) {
    taskContent = (
      <>
        <label className='flex flex-row gap-2 p-2 w-full cursor-pointer'>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => {
              onChangeTaskStatus(task.id)
            }}
          />
          {task.title}
        </label>
        
        <div className='flex flex-row gap-2'>
          <RegularButton
            text='Edit'
            onClick={() => {
              setIsEditing(true)
            }}
            buttonColor="bg-yellow-600 hover:bg-yellow-800"
          />
          
          <RegularButton
            text='Delete'
            onClick={() => {
              onDeleteTask(task.id)
            }}
            buttonColor="bg-red-600 hover:bg-red-800"
          />
        </div>
      </>
    )
  } else {
    taskContent = (
      <>
        <input
          type="text"
          value={state.title}
          className="p-2 rounded-md"
          onChange={e => {
            setState({
              ...state,
              title: e.target.value
            })
          }}
        />
        
        <div className='flex flex-row gap-2'>
          <RegularButton
            text='Save'
            onClick={(e) => {
              setIsEditing(false)
              onUpdateTask(state)
            }}
            buttonColor="bg-blue-600 hover:bg-blue-800"
          />
        </div>
      </>
    )
  }

  return (
    <div 
      className={
        `flex flex-row gap-2 justify-between p-2 align-middle rounded-md 
        ${!task.done ? 'bg-blue-100' : 'bg-green-100'}`
      }
    >
      {taskContent}
    </div>
  )
}

export default TaskList