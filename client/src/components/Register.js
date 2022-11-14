import React from 'react'
import { Paper, Box, Button, TextField, Typography, Link } from '@mui/material'
import { useState } from 'react'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/
// from 8 - 24 length, at least one: lower, uper, number and one of !@#$%  
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
// \w matches any words
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


const Register = () => {

  const [name, setName] = useState("")

  const [password, setPassword] = useState("")

  const [comfirm, setComfirm] = useState("")



  return (
    <Paper sx={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
      <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'center' }}>Register</Typography>
      <TextField fullWidth type='text' label='User Name' variant='outlined' required
        onChange={e => setName(e.target.value)}
      />
      <TextField fullWidth type='password' label='Password' variant='outlined' required
        onChange={e => setPassword(e.target.value)}
      />
      <TextField fullWidth type='password' label='Password Comfirm' variant='outlined' required
        onChange={e => setComfirm(e.target.value)}
      />
      <Button>Submit</Button>
      <Button>Cancel</Button>

    </Paper>
  )
}

export default Register