
import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Avatar,
  Stack,
  Divider,
  Link,
} from "@mui/material";

const Resume = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* 2 × 8px = 16px */}
      <Grid container spacing={2}>
        {/* 🔹 باکس نام و عنوان */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{ bgcolor: "grey.900", color: "white", p: 3, height: "100%" }}
          >
            <Typography variant="h5" fontWeight="bold">
              محمد رضایی
            </Typography>
            <Typography variant="subtitle1">
              توسعه‌دهنده فرانت‌اند 
            </Typography>
          </Box>
        </Grid>

        {/* 🔹 باکس عکس */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              bgcolor: "grey.100",
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Avatar
              src="https://i.pravatar.cc/200"
              alt="avatar"
              sx={{ width: 150, height: 150 }}
            />
          </Box>
        </Grid>

        {/* 🔹 درباره من */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: "grey.100", p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              درباره من
            </Typography>
            <Typography variant="body2">
              توسعه‌دهنده‌ای با انگیزه و خلاق، علاقه‌مند به طراحی رابط کاربری
              زیبا و کاربردی. مسلط به React و ابزارهای مدرن فرانت‌اند.
            </Typography>
          </Box>
        </Grid>

        {/* 🔹 اطلاعات تماس */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: "grey.100", p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              اطلاعات تماس
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">📞 09391234567</Typography>
              <Typography variant="body2">✉️ mohamed@email.com</Typography>
              <Typography variant="body2">📍 تهران، ایران</Typography>
            </Stack>
          </Box>
        </Grid>

        {/* 🔹 تحصیلات */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: "grey.100", p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              تحصیلات
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                🔸 کارشناسی مهندسی نرم‌افزار - دانشگاه تهران (1395 - 1399)
              </Typography>
              <Typography variant="body2">
                🔸 دیپلم ریاضی - دبیرستان علامه حلی
              </Typography>
            </Stack>
          </Box>
        </Grid>

        {/* 🔹 تجربه کاری */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: "grey.100", p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              تجربه کاری
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                🔸 فرانت‌اند دولوپر - شرکت ABC (1400 - اکنون)
              </Typography>
              <Typography variant="body2">
                🔸 کارآموز React - شرکت XYZ (تابستان 1399)
              </Typography>
            </Stack>
          </Box>
        </Grid>

        {/* 🔹 مهارت‌ها */}
        <Grid item xs={12}>
          <Box sx={{ bgcolor: "grey.100", p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              مهارت‌ها
            </Typography>
            <Grid container spacing={1}>
              {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(
                (skill) => (
                  <Grid item xs={6} sm={4} key={skill}>
                    <Box
                      sx={{
                        bgcolor: "grey.200",
                        p: 1,
                        borderRadius: 1,
                        textAlign: "center",
                      }}
                    >
                      {skill}
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Grid>

        {/* 🔹 لینک‌ها و رسانه‌ها */}
        <Grid item xs={12}>
          <Box sx={{ bgcolor: "grey.900", color: "white", p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              راه‌های ارتباطی
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Link href="#" underline="hover" color="inherit">
                LinkedIn
              </Link>
              <Link href="#" underline="hover" color="inherit">
                GitHub
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Telegram
              </Link>
              <Typography variant="body2">📞 09391234567</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resume;
