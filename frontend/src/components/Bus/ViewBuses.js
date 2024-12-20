import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TextField } from '@mui/material';
import Header from '../Header/Header';
import './viewBuses.css';

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

export default function ViewBuses() {
  return (

    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}

    <div className='mt-5 pt-3'></div>
    <div className='container mt-3'>
    <div className="row">
      <div className='col-7'>
                <TextField fullWidth 
                    id="outlined-textarea"
                    label="Search"
                    // size="small"
                />
      </div>
      <div className='col-5 pt-2'>
        <Button variant="contained" size='large'>Search</Button>
      </div>
    </div>
    
    <div className='d-flex flex-row-reverse'>   
        <a className='btn-add-new' href='/bus/add/new'><Button style={{
                                                        backgroundColor: "#009E60",
                                                          }}
            variant="contained" size='large'>Add New Bus</Button></a>    
      </div>
    </div>

    <div class="card text-white bg-primary mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-title"><center>Buses Information</center></h5>
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