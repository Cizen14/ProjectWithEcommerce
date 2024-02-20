import { Box, Button, Container, Paper, TableContainer, TextField } from '@mui/material'
import React from 'react'
import PageLayout from '../../Components/PageLayout'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <>
    <PageLayout>
      <div style={{marginTop:'7%'}}>

   <div style={{margin:'10px'}}>
         <Link to= '/products' >
          <Button variant="contained" padding={2} marginTop={2}> Back</Button>
         </Link>
    </div>
    <h2 style={{display:'flex', justifyContent:'center'}}>Add Product</h2>
    
    <Box sx={{border:'1', borderColor:"primary.main", p:'2', }}>
   
        <form>
            <TableContainer sx={{maxHeight: 550}}>
                <Container sx={{display:'flex',flexDirection:'column',justifyItems:'center', gap:'10px'}}>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Product Code" variant="outlined" />
                    <TextField id="outlined-basic" label="Image" variant="outlined" />
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <TextField id="outlined-basic" label="Price" variant="outlined" />
                    <Button variant="contained"> Add </Button>
                   
                </Container>
            </TableContainer>
         </form>
         </Box>
         </div>
    </PageLayout>
    
            
       
    
    </>
  )
}

export default AddProduct
