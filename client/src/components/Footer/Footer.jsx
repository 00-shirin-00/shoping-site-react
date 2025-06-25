import { colors, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Stack component={'footer'} bgcolor={'pink'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
      <Typography  variant="h1" color="text.secondary" component={"p"} sx={{color:'white'}}>footer</Typography>
   </Stack>
  )
}
