import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import BasicLayout from "../../layouts/BasicLayout";

type Props = {};

function LoginView({}: Props) {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // TODO: Implement login logic
    console.log("Processing login...");
    console.log("Remember me: ", rememberMe);
    console.log("Username: ", username);
    console.log("Password: ", password);

    // Wait 150ms to simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 150));

    console.log("Login successful!");

    return navigate("/");
  };

  const color = "#ffffff";
  const color2 = "#fbfbfb";

  return (
    <BasicLayout>
      <Grid container direction="column">
        <Grid
          item
          padding={{ x: 4 }}
          minHeight={725}
          display="flex"
          flexGrow={1}
          alignItems="center"
          justifyContent="center"
          position="relative"
          sx={{
            backgroundColor: "#e5e5f7",
            "--color": "#d9d9d9",
            backgroundImage: `linear-gradient(135deg, ${color} 20%, transparent 20%), linear-gradient(225deg, ${color} 20%, transparent 20%), linear-gradient(45deg, ${color} 20%, transparent 20%), linear-gradient(315deg, ${color} 20%, ${color2} 20%)`,
            backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat",
          }}
        >
          <Card component="form" role="form">
            <Stack spacing={3} padding={2}>
              <Typography variant="h2" align="center">
                Medical App
              </Typography>

              <Typography variant="h4" align="center">
                Login
              </Typography>

              <TextField label="Username" required />
              <TextField label="Password" type="password" required />

              <Button
                variant="contained"
                onClick={handleLogin}
                disableElevation
              >
                Login
              </Button>
              <Box display="flex" alignItems="center">
                <Switch
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Typography variant="body2">Remember me</Typography>
              </Box>

              <Button
                variant="contained"
                color="success"
                component={Link}
                to="/register"
                disableElevation
              >
                Register
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </BasicLayout>
  );
}

export default LoginView;
