import { Paper, TextField, Button, Box, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSignOutUserMutation } from '../features/api/userSlice'
import { selectedUser, logOut } from '../features/reducers/authSlice'


const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(selectedUser)

  console.log(currentUser)
  const [signOut] = useSignOutUserMutation()


  const handleLogOut = () => {
    signOut()
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
        {currentUser.token == null ?
          <>
            <Button onClick={() => navigate('/signin')} sx={{ color: 'white', mr: 3 }}>Sign In</Button>
            <Button onClick={() => navigate('/register')} sx={{ color: 'white', mr: 3 }}>Register</Button>
          </>
          : currentUser.admin ?
            <>
              <Button onClick={() => navigate('/todolist')} sx={{ color: 'white', mr: 3 }} >Go Goals</Button>
              <Button onClick={() => navigate('/userlist')} sx={{ color: 'white', mr: 3 }} >Admin</Button>
              <Button onClick={handleLogOut} sx={{ color: 'white', mr: 3 }} >Log Out</Button>
            </>
            :
            <>
              <Button onClick={() => navigate('/todolist')} sx={{ color: 'white', mr: 3 }} >Go Goals</Button>
              <Button onClick={handleLogOut} sx={{ color: 'white', mr: 3 }} >Log Out</Button>
            </>
        }
      </Grid>
    </Grid >
  )
}

export default Navbar