import React from 'react'
import Header from '../Header/Header';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Button } from '@mui/material';

import './addtimetable.css';


export default function AddTimeTable() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <div className="container mt-5 pt-3">
        <div className="card d-flex justify-content-center card-add-timetable">
          <div className="card-body py-5 px-md-5">
            <form>
                <center>
                <img className='gif-image-timetable' src="https://i.postimg.cc/Qx55TmRZ/lf30-editor-mpcfebd3-150x150.gif" />
                </center>

                <h4 className='mb-4 fw-bold text-uppercase'> add Bus Shedule</h4>

              <div className="row mb-4">
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Bus Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Bus Type"
                  >
                    <MenuItem value={10}>Normal</MenuItem>
                    <MenuItem value={20}>A/C</MenuItem>
                    <MenuItem value={30}>Luxury</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row mb-4">
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Bus Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Bus Type"
                  >
                    <MenuItem value={10}>Normal</MenuItem>
                    <MenuItem value={20}>A/C</MenuItem>
                    <MenuItem value={30}>Luxury</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="row mb-4">
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

              <div className="row mb-4">
                <div className='col-2 mt-3 text-muted'>
                    <h6>Time : </h6>
                </div>

                <div className='col-5 ps-0'>
                    <TextField fullWidth id="outlined-basic" label="Hour" variant="outlined" />
                </div>

                <div className='col-5 pe-0'>
                    <TextField fullWidth id="outlined-basic" label="Minutes" variant="outlined" />
                </div>
              </div>

              <div className="row mb-4">
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Bus Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Bus Type"
                  >
                    <MenuItem value={10}>Normal</MenuItem>
                    <MenuItem value={20}>A/C</MenuItem>
                    <MenuItem value={30}>Luxury</MenuItem>
                  </Select>
                </FormControl>
              </div>

                <div className= "d-flex justify-content-center">
                    <Button variant="contained" size='large'>Add Shedule</Button>
                </div>

            </form>
          </div>
        </div>
        </div>
      </Box>
    </Box>
  )
}
