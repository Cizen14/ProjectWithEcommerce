import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const columns = [
    { id: 'productName', label: 'Product Name', minWidth: 150 },
    { id: 'code', label: 'Product Code', minWidth: 50 },
    { id: 'images', label: 'Product Image', minWidth: 170 },
    { id: 'Description', label: 'Product description', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
    
    
  
   
  ];

  
  const rows = [
   
    
    
  ];
  

const ProductTable = () => {
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {productList}= useSelector(state=>state.product);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
    <div style={{marginLeft:'9%'}} >
    <h1 style={{margin:'15px', display:'flex', justifyContent:'center'}}> Products Table</h1>
    <Link to= '/add/products'>
    <Button sx={{ display:'flex', justifyContent:'flex-end'}}> Add Product</Button>
    </Link>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {productList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof row[column.id] === 'number'
                            ? column.format(row[column.id])
                            : row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    </>
  )
}

export default ProductTable
