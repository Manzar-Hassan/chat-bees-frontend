import { Box, Paper, Stack} from "@mui/material";
import LoginPageImage from "../../assets/register-login-img.png";
import SideBeeImage from "../../assets/side-bee.png";
import React from "react";
import {
  StyledBeeImage,
  StyledSideBeeImage,
  StyledGlassContainer,
  DisplayProps,
  StyledText,
  StyledTextField,
  StyledButton,
} from "../../styles/StyledComponents";

const Login = () => {
  return (
    <Paper
      sx={{
        height: "100vh",
        backgroundImage: "linear-gradient(#ec9f05,#ff4e00)",
      }}
    >
      <StyledBeeImage
        src={LoginPageImage}
        sx={{ display: { xs: "none", md: "block" } }}
      />
      <Box sx={DisplayProps}>
        <StyledGlassContainer sx={{ marginLeft: { md: "5rem", xs: 0 },marginTop:"5rem" }}>
          <StyledText variant="h4" component="div" mb={3}>
            Login
          </StyledText>
          <Stack direction="column" gap={2}>
            <div>
            <StyledText>username</StyledText>
            <StyledTextField
              variant="outlined"
              size="small"
              label="username"
              type="text"
            />
            </div>
            <div>
            <StyledText>password</StyledText>
            <StyledTextField
              variant="outlined"
              size="small"
              label="password"
              type="password"
            />
            </div>
            <StyledButton variant="contained">login</StyledButton>
          </Stack>
        </StyledGlassContainer>
      </Box>
      <StyledSideBeeImage src={SideBeeImage} />
    </Paper>
  );
};

export default Login;
