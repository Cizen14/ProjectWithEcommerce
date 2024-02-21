import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { auth, db } from '../Firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';
import { useDispatch } from 'react-redux';
import AdminLayout from '../Components/AdminLayout';



const inputs = [
    {name:"fName", label:"FirstName", type:"text", required:true },
    {name:"lName", label:"LastName", type:"text", required:true },
    {name:"email", label:"Email", type:"email", required:true },
    {name:"password", label:"Password", type:"password", required:true },
    {name:"repeatpassword", label:"Repeat-Password", type:"password", required:true }
]

const SignUp = () => {
    const [formData, setFormData] = useState ({});
    const dispatch = useDispatch()
    const handleChange =(e)=>{
        const{name, value} =e.target;
        console.log("changing")
        setFormData({...formData, [name]:value});
    }

 






    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("object")
        const {password, repeatpassword, ...restformData}= formData;
        const {email} =formData;
        if (password !== repeatpassword){
          return toast.error("Password Didnot match")
        }

        const signupPromise=  createUserWithEmailAndPassword(auth, email, password)
        toast.promise(signupPromise,{
          pending:"In Progress..."
        });
        try{
          const userCredential = await signupPromise;
          toast("User Created Successfully");
        
        const {uid} = userCredential.user;

        await setDoc(doc(db, "users", uid),{
          ...restformData, uid
        });
        setFormData({});
      }
      
      catch(error){
        const errorCode = error.code;

        if(errorCode.includes("auth/email-already-in-use")){
          toast.error("Account Already exists")
        }
        else{
          toast.error(error.message);
        }
      }
    }
  return (
    <AdminLayout>
      
    <Container component="main" maxWidth="xs" style={{height:'150vh', marginTop:'7%'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
         
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}  >
          
                {inputs.map(input=>(
                     <TextField sx={{mt:2}}
                        key={input.name} label={input.label} onChange={handleChange} {...input} fullWidth
                    
                   />
                ))}
               
           
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          
            <div> Already have an account?<NavLink to={"/login"}> Login</NavLink></div>

           
          </Box>
        </Box>
       
      </Container>
    
      </AdminLayout>
  )
}

export default SignUp
