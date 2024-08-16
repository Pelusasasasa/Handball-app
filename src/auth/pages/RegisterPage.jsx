import {Link as RouterLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Link, TextField, Typography, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { useMemo, useState } from 'react';


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El Correo debe tener un @'],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener mas de 6 letras'],
  displayName: [ (value) => value.length >= 3, 'El nombre debe de tener mas de 3 letas']
}

export const RegisterPage = () => {

  const {displayName, email, password, onInputChange, formState, isFormValid, passwordValid, emailValid, displayNameValid} = useForm(formData, formValidations);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const {status, errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Nombre' type="texto" placeholder="Tu Nombre" fullWidth name="displayName" value={displayName} onChange={onInputChange} helperText={displayNameValid} error={ !!displayNameValid && formSubmitted}/>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Email' type="email" placeholder="correo@correo.com" fullWidth value={email} name="email" onChange={onInputChange} helperText={emailValid} error={ !!emailValid && formSubmitted}/>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Password' type="password" placeholder="Password" value={password} fullWidth name="password" onChange={onInputChange} helperText={passwordValid} error={ !!passwordValid && formSubmitted}/>
          </Grid>

          <Grid container sx={{ mt: 2}}>
            <Grid item xs={12} sm={12} display={errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" disabled={isCheckingAuthentication} fullWidth>Crear Cuenta</Button>
            </Grid>
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
