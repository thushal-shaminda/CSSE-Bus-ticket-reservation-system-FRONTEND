import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from '../Header/Header';

function createData(Id, BusNo, Route, NoOfSeats, BusType) {
  return { Id, BusNo, Route, NoOfSeats, BusType };
}

const rows = [
  createData( 1, 'ND - 2569', 98, 52, 'Normal'),
  createData( 2, 'NC - 1547', 144, 32, 'AC'),
  createData( 3, 'NA - 1488', 952, 52, 'Normal'),
  createData( 4, 'NC - 1002', 5, 30, 'Luxuary'),
  createData( 5, 'ND - 7896', 92, 52, 'Normal'),
];

export default function RouteInformation() {
  return (

    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}

    <h4 className='mt-5 pt-3 fw-bold'>Month end Report</h4>
    <div className='container mt-3'>
    <div className="row">
      <div className="col-4">
        <h5 className='text-end mt-3'>Select Route</h5>
      </div>
      <div className='col-4'>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Route</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Route"
                    size='medium'
                    ma
                  >
                    <MenuItem value={10}>Normal</MenuItem>
                    <MenuItem value={20}>A/C</MenuItem>
                    <MenuItem value={30}>Luxury</MenuItem>
                  </Select>
                </FormControl>
      </div>
      <div className='col-4 mt-1'>
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
      <h5 className='text-green'>Total Journey Count : 10</h5>
      <h5 className='text-green'>Total Passenger Count : 150</h5> 

      <br/>

      <h5>Total Over Crowded Trip Count : </h5>
      <h5>Total Under Crowded Trip Count : </h5>
      </div>
    </div>
    </div>

    <div class="card text-white bg-primary mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-title"><center>Route Information</center></h5>
      </div>
    </div>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Bus No</TableCell>
            <TableCell align="right">Route No</TableCell>
            <TableCell align="right">No of Seats</TableCell>
            <TableCell align="right">Bus Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Id}
              </TableCell>
              <TableCell align="right">{row.BusNo}</TableCell>
              <TableCell align="right">{row.Route}</TableCell>
              <TableCell align="right">{row.NoOfSeats}</TableCell>
              <TableCell align="right">{row.BusType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
    </Box>
  );
}

