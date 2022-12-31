import RegularButton from './components/buttons/RegularButton'
import { ITodo } from './utils/todo'

const TaskList: React.FC<{
  tasks: ITodo[]
}> = ({ tasks }): any => {
  return (
    tasks.map(task => (
      <Task
        key={task.id}
        task={task}
      />
    ))
  )
}

const Task: React.FC<{
  task: ITodo
}> = ({ task }) => {
  return (
    <div className='flex flex-row gap-2 p-2 align-middle bg-blue-100 rounded-md'>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {}}
        />
        {task.title}
      </label>

      <RegularButton
        text='Edit'
        onClick={() => {}}
      />
      <RegularButton
        text='Delete'
        onClick={() => {}}
        className="bg-red-500"
      />
    </div>
  )
}

export default TaskList