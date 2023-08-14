import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, setUserLogged } from "../../store/Users/actions";
import Styles from "./Login.module.css";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Content = ({ handleLogin, email, password, setEmail, setPassword }) => (
  <CardContent>
    <TextField
      fullWidth
      required
      id="outlined-required"
      label="Usuario"
      className="mb-20"
      sx={{
        marginBottom: 5,
      }}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <TextField
      fullWidth
      required
      id="outlined-required"
      label="Contraseña"
      sx={{
        marginBottom: 3,
      }}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <Button fullWidth variant="contained" onClick={handleLogin}>
      Iniciar Sesion
    </Button>
  </CardContent>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [messageError, setMessageError] = useState("");

  const loadedUsers = useSelector((state) => state.users);
  const goRoute = useNavigate();
  const dispatch = useDispatch();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleLogin = () => {
    const matchingUser = loadedUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (matchingUser) {
      // Usuario encontrado, realizar la lógica de inicio de sesión
      setMessageError("Inicio de sesión exitoso:");
      setOpen(true);
      dispatch(setUserLogged(matchingUser));
      setTimeout(() => {
        goRoute("/search");
      }, "2000");
    } else {
      setMessageError("Credenciales incorrectas");
      setOpen(true);
    }
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={Styles.loginContainer}>
      <Card sx={{ minWidth: 500, height: 250 }}>
        <Content
          handleLogin={handleLogin}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          {messageError}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
