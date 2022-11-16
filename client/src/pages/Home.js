import React from 'react'
import { Paper, TextField, Button, Box, Typography, Link } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import { useSelector } from 'react-redux'
import { selectedUser } from '../features/reducers/authSlice'

const Home = () => {

  const currentUser = useSelector(selectedUser)

  return (
    <Box sx={{ height: '60vh', display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column', }}>

      <Typography variant='h4' sx={{ m: 4 }}>Welcome to Go Goals!</Typography>
      <Paper sx={{
        width: 650,
        p: 2
      }}>
        <TextField fullWidth label="What would you like to do Today?" variant="outlined" />
      </Paper>

      {currentUser.token ?
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 40, mt: 3 }}>
          <Typography sx={{ mr: 2 }}>Click to Go Goal! </Typography>
          <Link href='/todolist'> <DirectionsRunIcon /></Link>
        </Box>
        :
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 40, mt: 3 }}>
          <Typography sx={{ mr: 2 }}>Register for more experience </Typography>
          <Link href='/register'> <DirectionsRunIcon /></Link>
        </Box>
      }
    </Box >
  )
}

export default Home