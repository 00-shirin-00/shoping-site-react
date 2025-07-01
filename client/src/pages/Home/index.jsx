import React from 'react'
import Banner from './Banner'
import LastProduct from './LastProduct'
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box >
      <Banner />
      <LastProduct />
    </Box>
  );
}
