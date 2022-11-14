
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import styled, { ThemeProvider } from "styled-components"
import Register from './components/Register'
import Signin from './components/Signin'




function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/userlist' element={<UserList />} />


      </Routes>

    </Router>



  )
}

export default App
