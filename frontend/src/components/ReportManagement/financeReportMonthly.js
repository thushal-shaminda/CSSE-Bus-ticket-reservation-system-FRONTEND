import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import Header from '../Header/Header';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function createData(TicNo, Date, BusNo, RouteNo, pickuplocation, droplocation, tripcost) {
  return { TicNo, Date, BusNo, RouteNo, pickuplocation, droplocation , tripcost};
}

const rows = [
  createData('63', '2022-10-13', 'ND - 1256', 92, 'Galle', 'Colombo', 700),
  createData('64', '2022-10-23', 'NE - 4566', 5, 'negambo', 'Colombo', 300),
  createData('65', '2022-10-14', 'ND - 1486', 12, 'Kandy', 'Colombo', 500),
  createData('66', '2022-10-11', 'NC - 9866', 92, 'Jaffna', 'Colombo', 2500),
  createData('67', '2022-10-03', 'NA - 0216', 44, 'Kaluthra', 'Colombo', 200),
];


export default function FinanceReportMonthly() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}

    <h4 className='mt-5 pt-3 fw-bold'>Month-end Report</h4>
    <div className='container mt-4'>
    <div className="row">
      <div className="col-3">
        <h5 className='text-end mt-3 pe-3'>Select Month </h5>
      </div>
      <div className='col-3 pe-0'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            views={['year', 'month']}
            label="Year and Month"
            minDate={new Date('2012-03-01')}
            maxDate={new Date('2023-06-01')}
            // value={value}
            // onChange={setValue}
            renderInput={(params) => <TextField {...params} helperText={null} />}
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
        <h5 class="card-title"><center>Monthly Summery</center></h5>
      </div>
    </div>

    <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <div>
      <h5 className='text-green'>Total Journey Count : </h5>
      <h5 className='text-green'>Total Monthly Income : </h5> 

      <br/>

      <h5>Total Unpaid Journey Count : </h5>
      <h5>Total Unpaid Ticket Amount : </h5>

      <br/>

      <h5>Cash Paid Amount : </h5>
      <h5>Online Paid Amount : </h5>
      </div>
    </div>
    </div>

    <div class="card text-white bg-primary mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title"><center>Table Information</center></h5>
      </div>
    </div>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticket No</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Bus No</TableCell>
            <TableCell align="right">Route No</TableCell>
            <TableCell align="right">Pickup Location</TableCell>
            <TableCell align="right">Drop Location</TableCell>
            <TableCell align="right">Trip cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.TicNo}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.BusNo}</TableCell>
              <TableCell align="right">{row.RouteNo}</TableCell>
              <TableCell align="right">{row.pickuplocation}</TableCell>
              <TableCell align="right">{row.droplocation}</TableCell>
              <TableCell align="right">{row.tripcost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
    </Box>
  )
}
