import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { pink } from '@mui/material/colors'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Paper, TextField, Button, Box, Checkbox, ButtonGroup, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import { useGetTodosQuery } from '../features/api/todoSlice'

const TodoList = () => {

  const [todo, setTodo] = useState("")

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()



  const handleSubmit = e => {
    e.preventDefault()
    setTodo("")
  }

  let content

  if (isLoading) {
    content = <Typography variant="h6" >Loading...</Typography>
  } else if (isSuccess) {
    content = JSON.stringify(todos)
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
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <Button onClick={handleSubmit}> <AddCircleOutlineIcon /></Button>
        </Box>
        <Box sx={{
          width: 650,
          maxWidth: '100%',
          display: "flex",
          p: 2
        }}>
          <TextField fullWidth label="What would you like to do Today?" variant="outlined" />
          <Button><Checkbox defaultChecked color="success" /></Button>
          <Button> <AutorenewIcon color="primary" /></Button>
          <Button>  <DeleteForeverIcon sx={{ color: pink[500] }} /></Button>
        </Box>
      </Paper>
      {content}
    </Box>

  )
}

export default TodoList