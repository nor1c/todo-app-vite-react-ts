import { useState } from 'react'

import RegularButton from './components/buttons/RegularButton'

const AddTodo: React.FC<{
  onAdd: Function
}> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const addNewTodo = () => {
    if (newTodo) {
      setNewTodo('')
      onAdd(newTodo)
    }
  }

  return (
    <div className='flex flex-row gap-2'>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        className="border-2 border-gray-200 p-2 rounded-md"
        placeholder='Add new task here'
      />
      
      <RegularButton
        text='Add'
        onClick={addNewTodo}
        buttonColor="bg-blue-600 hover:bg-blue-800"
      />
    </div>
  )
}

export default AddTodo