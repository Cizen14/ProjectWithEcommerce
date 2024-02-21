import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import PageLayout from '../Components/PageLayout'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getUserInfoAction } from '../../redux/Auth/authAction'
import { auth } from '../Firebase-config'
import { toast } from 'react-toastify'


const Login = () => {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userInfo} = useSelector(state => state.auth);


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});

  }


  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {email, password} = formData;
    try{
    const signInPromise = signInWithEmailAndPassword(auth, email, password);
    toast.promise(signInPromise,{
      pending:'In Progress...'
    });
    const userCredential = await signInPromise;
    const {user} = userCredential; 
    dispatch(getUserInfoAction(user.uid));
    console.log(userCredential)
    navigate('/');
   
  }

  catch(e){
    const errorCode =e.code;
    if(errorCode.includes("auth/invalid-credential")){
      toast.error("Invalid Email or Password")
      
    }

  };
  
}

useEffect(()=>{
  if(userInfo.uid){
    if (location.state?.path){
      navigate(location.state.path);
    }
    else{
      navigate('/')
    }
  }
}, [userInfo])

  return (
    <>
    <PageLayout>
     
    <Grid container component="main">
    <CssBaseline />
   <div className='loginpage' >
   <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'50vh'
      }}
    />
    <Grid item xs={12} sm={8} md={5} elevation={6} >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          
        </Box>
      </Box>
    </Grid>
    </div>
  </Grid>

  </PageLayout>
  </>
  )
}

export default Login
