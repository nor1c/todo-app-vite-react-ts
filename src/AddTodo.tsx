import { useState } from 'react'

import RegularButton from './components/buttons/RegularButton'

const AddTodo: React.FC<{
  onAdd: Function
}> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const addNewTodo = () => {
    setNewTodo('')
    onAdd(newTodo)
  }

  return (
    <div className='flex flex-row gap-2'>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        className="border-2 border-gray-200 p-2 rounded-md"
      />
      <RegularButton
        text='Add'
        onClick={addNewTodo}
      />
    </div>
  )
}

export default AddTodo