import React from 'react'
import { useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation } from '../features/api/userSlice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { pink } from '@mui/material/colors'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Paper, TextField, Button, Box, Checkbox, ButtonGroup, Typography } from '@mui/material'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import EditIcon from '@mui/icons-material/Edit'

const UserList = () => {

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
        <Box key={user._id}>
          <TextField fullWidth defaultValue={user.name} variant="outlined"

          />
        </Box>
      )
    })
  } else if (isError) {
    content = <Typography>{error}</Typography>
  }

  return (
    <>
      {content}
    </>
  )
}

export default UserList