import { Paper, TextField, Button, Box, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectedUser } from '../features/reducers/authSlice'


const Navbar = () => {

  const currentUser = useSelector(selectedUser)

  return (

    <Grid container sx={{ height: '120px', width: '100vw', backgroundColor: '#1769aa', color: 'white' }}>
      <Grid xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ ml: 3 }}>
          <Link href='/' underline="none" sx={{ color: 'white' }}>Go Goals</Link>
        </Typography>
      </Grid>
      <Grid xs={6}></Grid>
      <Grid xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {currentUser ?
          <Link href='/' underline="none" sx={{ color: 'white', mr: 3 }}>Log Out</Link>
          :
          <>
            <Link href='/signin' underline="none" sx={{ color: 'white', mr: 3 }}>Sign In</Link>
            <Link href='/register' underline="none" sx={{ color: 'white', mr: 3 }}>Register</Link>
          </>
        }
      </Grid>
    </Grid>
  )
}

export default Navbar