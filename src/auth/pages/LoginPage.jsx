import {Link as RouterLink} from 'react-router-dom';

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginUserWithEmailPassword } from '../../store/auth/thunks';
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const {email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch(startLoginUserWithEmailPassword({email, password}));

  };

  const onGoogleSignIn = (event) => {
    event.preventDefault();
    dispatch( startGoogleSignIn() )
  };

  return (
    <AuthLayout title="Iniciar Sesion">

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField label='Email' type="email" placeholder="correo@correo.com" fullWidth name="email" value={email} onChange={onInputChange} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField label='Password' type="password" placeholder="*******" fullWidth name="password" value={password}  onChange={onInputChange}/>
          </Grid>

          <Grid container display={errorMessage ? '' : 'none'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid container spacing={2} sx={({ mb: 2, mt: 2})}>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}> Login </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ml: 1}}> Google </Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Link component={ RouterLink } color={'inherit'} to="/auth/register">
              Crear una Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
