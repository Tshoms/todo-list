import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
//import { Link } from "react-router-dom";




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        T-digital
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://avatars0.githubusercontent.com/u/59461576?s=460&u=5073048684085c2328f316793bb0d1a67ee6cc3e&v=4)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// ----


const initialValues = {
  email: "",
  password: "",
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

const validationSchema = yup.object().shape({
  email: yup.string().email("email jordy").required("required"),
 password: yup
        .string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
});

function SignInSide() {
  const classes = useStyles();

  const formik = useFormik({
    //-- methode 1 --
    //initialValues: { email: "", password: "" },
    //validationSchema: { validationSchema },
    //onSubmit: (values) => {
    //alert(JSON.stringify(values, null, 2))},
    //-- methode 2 --
    initialValues,
    onSubmit,
    handleChange,
    validationSchema,

    
  });

  //console.log("Form values", formik.values);
  
  
  
  
 

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              
              autoComplete="email"
              autoFocus
            />
               {formik.errors.email && <p>{formik.errors.email}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              required="required"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              autoComplete="current-password"
            />
            {formik.errors.password && <p>{formik.errors.password}</p>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={formik.values.submit}
              onClick={formik.handleSubmit}
            >
              submit
              </Button>
            
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
 
}


//<Link href="http://localhost:3000/home#" variant="body2">
//submit
//</Link>


export default SignInSide;
