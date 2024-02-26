import { Box, Button, Container, Paper, TableContainer, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import PageLayout from '../../Components/PageLayout'
import { Link } from 'react-router-dom'
import AdminLayout from '../../Components/AdminLayout'
import { addProductAction } from '../../../redux/Products/productAction'


const AddProduct = () => {
  const [formData, setFormData] = useState({});
  
  const formRef = useRef();


  const handleChange =(e)=>{
    console.log("typing")
    const {name, value} =e.target;
    setFormData({...formData, [name]:value});
    console.log(formData)
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

    try{
      console.log(formData)
      addProductAction(formData);

      formRef.current.reset();
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <>
    
    <AdminLayout>
      <div style={{marginTop:'7%'}}>

   <div style={{marginLeft:'10%'}}>
         <Link to= '/products' >
          <Button variant="contained" sx={{m:2}} > Back</Button>
         </Link>
    </div>
    <h2 style={{display:'flex', justifyContent:'center'}}>Add Product</h2>
    
    <Box sx={{border:'1', borderColor:"primary.main", p:'2', }}>
   
        <form onSubmit={handleSubmit} ref={formRef}>
            <TableContainer sx={{maxHeight: 550}}>
                <Container sx={{display:'flex',flexDirection:'column',justifyItems:'center', gap:'10px'}}>
                    <TextField id="outlined-basic"name='productName' label="Product Name" variant="outlined" onChange={handleChange} />
                    <TextField id="outlined-basic" name='productCode' label="Product Code" variant="outlined" onChange={handleChange} />
                    <TextField id="outlined-basic" name='Image'label="Image" variant="outlined" onChange={handleChange} />
                    <TextField id="outlined-basic" name='Description'label="Description" variant="outlined" onChange={handleChange} />
                    <TextField id="outlined-basic" name='Price' label="Price" variant="outlined" onChange={handleChange} />
                    <Button variant="contained" type='submit'> Add </Button>
                   
                </Container>
            </TableContainer>
         </form>
         </Box>
         </div>
    </AdminLayout>
    
            
       
    
    </>
  )
}

export default AddProduct
