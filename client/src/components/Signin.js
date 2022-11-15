import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Box, Button, TextField, Typography, Link } from '@mui/material'
import { pink } from '@mui/material/colors'
import { useSignInUserMutation } from '../features/api/userSlice'

const Signin = () => {

  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [errorMessage, seterrorMessage] = useState('')

  const navigate = useNavigate()

  const [signInUser, response] = useSignInUserMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await signInUser({ name: userName, password: userPassword }).unwrap()
      console.log(res)
      navigate('/todolist')
    } catch (error) {
      if (!error?.originalStatus) {
        seterrorMessage('No Server Response')
      } else if (error.originalStatus.status === 400) {
        seterrorMessage('Missing User Name, Email or Password')
      } else if (error.originalStatus.status === 401) {
        seterrorMessage('Unauthorized')
      } else {
        seterrorMessage('Login Failed')
      }
    }
  }





  return (
    <Box sx={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      <Paper sx={{ width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 3 }}>


        <Typography variant='h5' sx={{ p: 3 }} >Sign In</Typography>
        {response.isError && response.error.data ? <Typography sx={{ color: pink[500] }}>{response.error.data}</Typography> : ""}
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