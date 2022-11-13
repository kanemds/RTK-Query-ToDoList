import React, { useState } from 'react'
import { useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation } from '../features/api/userSlice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { pink } from '@mui/material/colors'
import { Paper, TextField, Button, Box, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import EditIcon from '@mui/icons-material/Edit'

const UserList = () => {

  const [update, setUpdate] = useState("")

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()

  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()


  let content

  if (isLoading) {
    content = <Typography variant="h6" >Loading...</Typography>
  } else if (isSuccess) {
    content = users.map(user => {


      return (
        <Box key={user._id}
          sx={{
            width: 650,
            maxWidth: '100%',
            display: "flex",
            p: 2
          }}>
          <TextField disabled={user.disabledEdit}
            fullWidth defaultValue={user.name} variant="outlined"
            onChange={e => setUpdate(e.target.value)}
          />

          <Button onClick={
            () => { updateUser({ ...user, name: update || user.name, disabledEdit: !user.disabledEdit }) }
          }>
            {user.disabledEdit ? <EditIcon /> : <AutorenewIcon />}
          </Button>
          <Button onClick={() => deleteUser({ id: user._id })}>
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
        <Typography variant="h3">User List</Typography>
        {content}
      </Paper>
    </Box >
  )
}

export default UserList