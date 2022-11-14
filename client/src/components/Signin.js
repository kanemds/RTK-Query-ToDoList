import React, { useState } from 'react'
import { Paper, Box, Button, TextField, Typography, Link } from '@mui/material'
import { useSignInUserMutation } from '../features/api/userSlice'

const Signin = () => {

  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [isError, setIsError] = useState(false)

  const [signInUser, { error }] = useSignInUserMutation()

  const handleSubmit = e => {
    e.preventDefault()
    signInUser({ name: userName, password: userPassword })
  }

  console.log(error)


  return (
    <Box sx={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


      <Paper sx={{ width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 3 }}>


        <Typography variant='h5' sx={{ p: 3 }} >Sign In</Typography>
        <TextField fullWidth type='text' label='User Name' variant='outlined' required sx={{ m: 3 }}
          onChange={e => setUserName(e.target.value)}
        />

        <TextField fullWidth type='password' label='Password' variant='outlined' required sx={{ m: 3 }}
          onChange={e => setUserPassword(e.target.value)}
        />


        <Button onClick={handleSubmit}>Submit</Button>
        <Button><Link href='/' underline="none">Cancel</Link></Button>

      </Paper>

    </Box >
  )
}

export default Signin