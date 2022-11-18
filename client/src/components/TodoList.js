import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { pink } from '@mui/material/colors'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Paper, TextField, Button, Box, Checkbox, ButtonGroup, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import EditIcon from '@mui/icons-material/Edit'
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '../features/api/todoSlice'
import { useSelector } from 'react-redux'
import { selectedUser } from '../features/reducers/authSlice'

const TodoList = () => {

  const [newTodo, setNewTodo] = useState("")
  const [update, setUpdate] = useState("")
  const [refresh, setRefresh] = useState([])
  const currentUser = useSelector(selectedUser)
  console.log(currentUser)

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()
  const [addTodo] = useAddTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()


  const handleSubmit = e => {
    e.preventDefault()
    addTodo({ userId: currentUser.id, desc: newTodo })
  }

  console.log(todos)

  let content

  if (isLoading) {
    content = <Typography variant="h6" >Loading...</Typography>
  } else if (isSuccess) {
    content = todos.map(todo => {

      return (
        <Box key={todo._id} sx={{
          width: 650,
          maxWidth: '100%',
          display: "flex",
          p: 2
        }}>
          <TextField disabled={todo.disabledEdit} fullWidth defaultValue={todo.desc} variant="outlined"
            onChange={e => setUpdate(e.target.value)}
          />
          <Button onClick={() => updateTodo({ ...todo, isComplete: !todo.isComplete })}>
            <Checkbox checked={todo.isComplete} color="success" />
          </Button>
          <Button onClick={
            () => updateTodo({ ...todo, desc: update || todo.desc, disabledEdit: !todo.disabledEdit })
          }>
            {todo.disabledEdit ? <EditIcon /> : <AutorenewIcon />}
          </Button>

          <Button onClick={() => deleteTodo({ id: todo._id })}>
            <DeleteForeverIcon sx={{ color: pink[500] }} />
          </Button>
        </Box>
      )
    })
  } else if (isError) {
    content = <Typography variant="h6" >{error}</Typography>
  }


  return (

    <Box sx={{ display: "flex", justifyContent: "center", pt: 6 }}>
      <Paper sx={{ width: 700, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 4 }}>
        <Typography variant="h3">Let's do it!</Typography>
        <Box sx={{
          width: 650,
          maxWidth: '100%',
          display: "flex",
          p: 2
        }}>
          <TextField fullWidth label="What would you like to do Today?" variant="outlined"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
          <Button onClick={handleSubmit}> <AddCircleOutlineIcon /></Button>
        </Box>
        {content}
      </Paper>

    </Box>

  )
}

export default TodoList