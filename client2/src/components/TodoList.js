import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { pink } from '@mui/material/colors'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Paper, TextField, Button, Box, Checkbox, ButtonGroup, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew'

const TodoList = () => {
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
          <TextField fullWidth label="What would you like to do Today?" variant="outlined" />
          <Button> <AddCircleOutlineIcon /></Button>
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
    </Box>

  )
}

export default TodoList