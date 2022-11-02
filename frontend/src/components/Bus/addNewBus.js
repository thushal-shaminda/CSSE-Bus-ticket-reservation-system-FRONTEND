import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import './addNewBus.css'
import Header from '../Header/Header';

export default function AddNewBus() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <div className="container mt-5 pt-3">
        <div className="card d-flex justify-content-center card-new-bus">
            <div className="card-body py-5 px-md-5">
              <form>
                <center>
                    <img className='gif-image' src="https://i.postimg.cc/tTpCYL4j/34600-bus-ticket.gif" />
                </center>
                <h4 className='mb-4 fw-bold text-uppercase'> add a new bus</h4>
                <div className="row mb-4">
                <TextField
                    id="outlined-textarea"
                    label="Enter Bus Number"
                    // size="small"
                />
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
                <TextField
                    id="outlined-textarea"
                    label="Enter Bus Capacity"
                    // size="small"
                />
                </div>
                <div className= "d-flex justify-content-center">
                    <Button variant="contained" size='large'>Add Bus</Button>
                </div>
                

                    
              </form>
            </div>
            </div>
            </div>
          </Box>
    </Box>
  )
}
