import React from 'react'
import { Paper, Box, Button, TextField, Typography, Link } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
import { useEffect } from 'react'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/
// from 8 - 24 length, at least one: lower, uper, number and one of !@#$%  
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
// \w matches any words
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


const Register = () => {

  const [name, setName] = useState("")
  const [validName, setValidName] = useState(false)

  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)

  const [comfirm, setComfirm] = useState("")
  const [isMatch, setIsMatch] = useState(false)


  useEffect(() => {
    const result = USER_REGEX.test(name)
    setValidName(result)
  }, [name])

  useEffect(() => {
    const result = PWD_REGEX.test(password)
    setValidPassword(result)
  }, [password])

  useEffect(() => {
    const match = comfirm === password
    setIsMatch(match)
  }, [comfirm, password])

  const handleSubmit = e => {
    e.preventDefault()

  }


  return (
    <Paper sx={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
      <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'center' }}>Register</Typography>
      <TextField fullWidth type='text' label='User Name' variant='outlined' required
        onChange={e => setName(e.target.value)}

        InputProps={{
          endAdornment:
            <CheckIcon />
        }}
      />
      {validName || name.length === 0 ? "" : <Typography>User Name must be 4 to 24 characters(Letters and Numbers only) </Typography>}
      <TextField fullWidth type='password' label='Password' variant='outlined' required
        onChange={e => setPassword(e.target.value)}
      />
      {validPassword || password.length === 0 ? "" : <Typography>Invalided Password</Typography>}
      <TextField fullWidth type='password' label='Password Comfirm' variant='outlined' required
        onChange={e => setComfirm(e.target.value)}
      />
      {isMatch || comfirm.length === 0 ? "" : <Typography>Please match with Password</Typography>}
      <Typography variant='h8'>Password must be  8 to 24 charaters and includes following:
        one capital letter, one number and one of "!@#$%" special charater</Typography>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button>Cancel</Button>

    </Paper>
  )
}

export default Register