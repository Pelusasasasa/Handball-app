import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks/useForm';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

export const RegisterPage = () => {

  const {displayName, email, password} = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Nombre' type="texto" placeholder="Tu Nombre" fullWidth name="displayName" value={displayName}/>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Email' type="email" placeholder="correo@correo.com" fullWidth value={email} name="email" />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Password' type="password" placeholder="Password" value={password} fullWidth name="password" />
          </Grid>

          <Grid container sx={{ mt: 2}}>
            <Button type="submit" variant="contained" fullWidth>Iniciar Sesion</Button>
          </Grid>

          <Grid container sx={{ mt: 2}} direction={'row'} justifyContent={'end'}>
            <Typography sx={{mr:1}}>¿Ya tienes Cuenta?</Typography>
            <Link component={ RouterLink } color={'inherit'} to="/auth/login">
              Iniciar Sesion
            </Link>

          </Grid>

        </Grid>


      </form>
    </AuthLayout>
  )
}
