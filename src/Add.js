import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
//import { connect } from "react-redux"; // pour connecter notre store avec notre app.

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        by T-digital
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//-- style

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//-- state

const initialValues = {
  tâche: "",
  attente: "",
  Description:"",
  gotToHome: false
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const handleChange = (event) => {
  const email = event.target.value;
  const password = event.target.value;
  this.setState({ email, password });
};


 function Add() {
  const classes = useStyles();
  
  const formik = useFormik({
      
    initialValues,
        onSubmit,
        handleChange
        
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
         Ajouter une tache
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Nom de la tâche"
                name="Nom de la tâche"
                variant="outlined"
                required
                fullWidth
                id="tâche"
                label="Nom de la tâche"
                onChange={formik.handleChange}
                value={formik.values.tâche}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="attente"
                label="En attente/À Résolu"
                name="En attente/À Résolu"
                onChange={formik.handleChange}
                value={formik.values.attente}
                autoComplete="En attente/À Résolu"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Description"
                label="Description"
                name="Description"
                onChange={formik.handleChange}
                value={formik.values.Description}
                autoComplete="Description"
              />
            </Grid>
         </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ajouter
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Add;