import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { CardHeader } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function RegisterCard() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPass, setUserPass] = React.useState("");
  const handleSubmit = () => {
    console.log(userEmail, userPass);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title="Login" subheader="PassCode" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="userEmail"
              label="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              id="userPass"
              label="Password"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
            />
          </Grid>
          <Grid item align="center" xs={12}>
            <Button
              color="primary"
              size="medium"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
