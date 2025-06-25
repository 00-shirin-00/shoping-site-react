import React from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import ProfileImage from "./img/profile.jpg";
export default function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: 4,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Grid columns={12} columnSpacing={2} alignItems="center">
        <Box sx={{ gridColumn: "span 8" }}>
          <Typography variant="h4" fontWeight="bold">
            RICHARD SANCHEZ
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Saya memiliki pengalaman selama tiga tahun sebagai seorang
            fotografer dan videografer...
          </Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "span 4",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Avatar
            src={ProfileImage}
            variant="square"
            sx={{ width: 620, height: 520, borderRadius: 2 }}
          />
        </Box>
      </Grid>

      <Divider sx={{ my: 4, backgroundColor: "gray" }} />
    </Container>
  );
}
