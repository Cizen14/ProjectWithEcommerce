import { Box, Button, Container, Paper, TableContainer, TextField } from '@mui/material'
import React from 'react'
import PageLayout from '../../Components/PageLayout'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <>
    <PageLayout>

   

    <h2>Add Product</h2>
    
    <Box sx={{border:'1', borderColor:"primary.main", p:'2', width:'100%'}}>
   
        <form>
            <TableContainer sx={{maxHeight: 550, width:'100%'}}>
                <Container sx={{display:'flex',flexDirection:'column', gap:'10px',marginTop:'20px', marginBottom:'20px', maxWidth:'100%'}}>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Product Code" variant="outlined" />
                    <TextField id="outlined-basic" label="Image" variant="outlined" />
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <TextField id="outlined-basic" label="Price" variant="outlined" />
                    <Button variant="contained"> Add </Button>
                    <Link to= '/products' >
                    <Button variant="contained" margin={0} marginTop={2}> Back</Button>
                    </Link>
                </Container>
            </TableContainer>
         </form>
         </Box>
    </PageLayout>
    
            
       
    
    </>
  )
}

export default AddProduct
