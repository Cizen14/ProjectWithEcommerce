import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const inputs = [
    {name:"fName", label:"FirstName", type:"text", required:true },
    {name:"lName", label:"LastName", type:"text", required:true },
    {name:"email", label:"Email", type:"email", required:true },
    {name:"password", label:"Password", type:"password", required:true },
    {name:"repeatpassword", label:"Repeat-Password", type:"password", required:true }
]

const SignUp = () => {
    const [formData, setFormData] = useState ("");
    const handleChange =(e)=>{
        const{name, value} =e.target;
        console.log("changing")
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("object")
        const {password, repeatpassword, ...restformData}= formData;
        const {email} =formData;
    }
  return (
    <Container component="main" maxWidth="xs">
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
  )
}

export default SignUp
