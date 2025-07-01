import { colors, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Stack component={'footer'} justifyContent={'center'} alignItems={'center'} sx={{
  minWidth:'500px',backgroundColor:colors.pink[900]}}>
      <Typography  variant="h1" color="text.secondary" component={"p"} sx={{color:'white'}}>footer</Typography>
   </Stack>
  )
}
