
import './App.css'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/userlist' element={<UserList />} />


      </Routes>

    </Router>



  )
}

export default App
