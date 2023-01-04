import { createBrowserRouter, Link } from 'react-router-dom'

import App from './App'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/profile',
    element: <div>
      <Link to="/">go to home</Link>
      <hr />

      profile page
    </div>
  }
])