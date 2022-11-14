import React from 'react'
import { Paper, Box, Button, TextField, Typography, Link } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCreateUserMutation } from '../features/api/userSlice'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/
// from 8 - 24 length, at least one: lower, uper, number and one of !@#$%  
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
// \w matches any words
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


const Register = () => {

  const [userName, setUserName] = useState("")
  const [validUserName, setValidUserName] = useState(false)

  const [userPassword, setUserPassword] = useState("")
  const [validuserPassword, setValiduserPassword] = useState(false)

  const [comfirm, setComfirm] = useState("")
  const [isMatch, setIsMatch] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const [createUser] = useCreateUserMutation()

  useEffect(() => {
    const result = USER_REGEX.test(userName)
    setValidUserName(result)
  }, [userName])

  useEffect(() => {
    const result = PWD_REGEX.test(userPassword)
    setValiduserPassword(result)
  }, [userPassword])

  useEffect(() => {
    const match = comfirm === userPassword
    setIsMatch(match)
  }, [comfirm, userPassword])

  const handleSubmit = e => {
    e.preventDefault()
    const vn = USER_REGEX.test(userName)
    const vp = PWD_REGEX.test(userPassword)
    const vpc = comfirm === userPassword

    if (!vn || !vp || !vpc) {
      setErrorMessage('Invalid Entry')
      return
    }
    createUser({ name: userName, password: userPassword })
    setSuccess(true)
  }


  return (
    <Box sx={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {success ?
        <Paper sx={{ width: '600px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mb: 5 }}>Welcome {userName} to our app</Typography>
          <Link href='signin' underline="none">Click Here to start your journey!</Link>
        </Paper>
        :

        <Paper sx={{ width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 3 }}>
          <Typography variant='h5' sx={{ p: 3 }} >Register</Typography>
          <TextField fullWidth type='text' label='User Name' variant='outlined' required sx={{ m: 3 }}
            onChange={e => setUserName(e.target.value)}

            InputProps={{
              endAdornment:
                <CheckIcon />
            }}
          />
          {validUserName || userName.length === 0 ? "" : <Typography>User Name must be 4 to 24 characters(Letters and Numbers only) </Typography>}
          <TextField fullWidth type='password' label='Password' variant='outlined' required sx={{ m: 3 }}
            onChange={e => setUserPassword(e.target.value)}
          />
          {validuserPassword || userPassword.length === 0 ? "" : <Typography>Invalided Password</Typography>}
          <TextField fullWidth type='password' label='Password Comfirm' variant='outlined' required sx={{ m: 3 }}
            onChange={e => setComfirm(e.target.value)}
          />
          {isMatch || comfirm.length === 0 ? "" : <Typography>Please match with userPassword</Typography>}
          <Typography variant='h8' sx={{ m: 3 }}>Password must be 8 to 24 charaters and includes following:
            one capital letter, one number and one of "!@#$%" special charater</Typography>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button><Link href='/' underline="none">Cancel</Link></Button>
        </Paper>
      }
    </Box >
  )
}

export default Register