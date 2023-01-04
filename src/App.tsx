import { Link } from 'react-router-dom'

import TodoApp from './TodoApp'

export default function App() {
  return (
    <>
      <nav>
        <Link to="profile">profiles</Link>
      </nav>

      <TodoApp />
    </>
  )
}