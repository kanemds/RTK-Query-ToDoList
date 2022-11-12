import React from 'react'
import { useGetUsersQuery } from '../features/api/userSlice'
import { Paper, TextField, Button, Box, Checkbox, ButtonGroup, Typography } from '@mui/material'

const UserList = () => {

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()

  console.log(users)


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