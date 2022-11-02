import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Box, Button    } from '@mui/material';
import Header from '../Header/Header';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function FinanceReportDaily() {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}

    <h4 className='mt-5 pt-3 fw-bold'>Day-end Report</h4>
    <div className='container mt-4'>
    <div className="row">
      <div className="col-3">
        <h5 className='text-end mt-3 pe-3'>Select Date</h5>
      </div>
      <div className='col-3 pe-0'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        // value={value}
                        // onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
      </div>
      <div className='col-6 mt-1 ps-0'>
        <Button variant="contained" size='large'>Genearte Report</Button>
      </div>
    </div>
    </div>

    <div class="card text-white bg-primary mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-title"><center>Daily Summery</center></h5>
      </div>
    </div>

    <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <div>
      <h5 className='text-green'>Total Journey Count : xxxxxxxx</h5>
      <h5 className='text-green'>Total Daily Income : xxxxxxxx</h5> 

      <br/>

      <h5>Total Unpaid Journey Count : xxxxxxxx</h5>
      <h5>Total Unpaid Ticket Amount : xxxxxxxx</h5>

      <br/>

      <h5>Cash Paid Amount : xxxxxxxx</h5>
      <h5>Online Paid Amount : xxxxxxxx</h5>
      </div>
    </div>
    </div>

    <div class="card text-white bg-primary mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-title"><center>Ticket Information</center></h5>
      </div>
    </div>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
    </Box>
  )
}
