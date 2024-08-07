import {Link as RouterLink} from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { checkingCredentials } from '../../store/auth/authSlice';
import { startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const dispatch = useDispatch()

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( checkingCredentials() );
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
            <TextField label='Correo' type="email" placeholder="correo@correo.com" fullWidth name="email" value='' />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField label='Password' type="password" placeholder="*******" fullWidth name="password" />
          </Grid>

          <Grid container spacing={2} sx={({ mb: 2, mt: 2})}>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit"> Login </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
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
