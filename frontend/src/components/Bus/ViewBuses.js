import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Header from '../Header/Header';
import './viewBuses.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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

export default function ViewBuses() {
  return (

    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* <Toolbar /> */}

    <h4 className='mt-5 pt-3 fw-bold'>Month end Report</h4>
    <div className='container mt-4'>
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
      <h5 className='text-green'>Total Journey Count : xxxxxxxx</h5>
      <h5 className='text-green'>Total Passenger Count : xxxxxxxx</h5> 

      <br/>

      <h5>Total Over Crowded Trip Count : xxxxxxxx</h5>
      <h5>Total Under Crowded Trip Count : xxxxxxxx</h5>
      </div>
    </div>
    </div>

    <div class="card text-white bg-primary mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-title"><center>Buses Information</center></h5>
      </div>
    </div>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
  );
}
