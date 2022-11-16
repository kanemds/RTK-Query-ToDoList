import { Paper, TextField, Button, Box, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectedUser, logOut } from '../features/reducers/authSlice'


const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(selectedUser)
  console.log(currentUser)

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (

    <Grid container sx={{ height: '120px', width: '100vw', backgroundColor: '#1769aa', color: 'white' }}>
      <Grid xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ ml: 3 }}>
          <Link href='/' underline="none" sx={{ color: 'white' }}>Go Goals</Link>
        </Typography>
      </Grid>
      <Grid xs={6}></Grid>
      <Grid xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {currentUser.token != null ?
          <Button onClick={handleLogOut} sx={{ color: 'white', mr: 3 }} >Log Out</Button>
          :
          <>
            <Button><Link href='/signin' underline="none" sx={{ color: 'white', mr: 3 }}>Sign In</Link></Button>
            <Button><Link href='/register' underline="none" sx={{ color: 'white', mr: 3 }}>Register</Link></Button>
          </>
        }
      </Grid>
    </Grid >
  )
}

export default Navbar