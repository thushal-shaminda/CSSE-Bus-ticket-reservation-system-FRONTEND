import React, {useState, useEffect} from 'react'
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
import swal from "sweetalert";
import './addtimetable.css'
import { NewTimeTable } from '../../api/api.bus';


export default function AddTimeTable() {

    const [timetableBus, settimetableBus] = useState('');
    const [timetableRoute, settimetableRoute] = useState('');
    const [timetableDay, settimetableDay] = useState('');
    const [timetableTimeH, settimetableTimeH] = useState(new Date());
    const [timetableTimeM, settimetableTimeM] = useState('');
    const [timetableUpDown, settimetableUpDown] = useState('');

    const addtimetable = async (e) => {
        e.preventDefault();
        const timetable = {
            timetableBus,
            timetableRoute, 
            timetableDay,
            timetableTimeH,
            timetableTimeM,
            timetableUpDown
        }
        console.log(timetable);
        await NewTimeTable(timetable)
        .then((res) => {
            swal("Success!", "New Time Table Added!", "success");
        }
        ).catch((err) => {
            swal("Error!", "Something went wrong!", "error");
        }
        );

    }
    
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
            <form onSubmit={addtimetable}>
                <center>
                <img className='gif-image-timetable' src="https://i.postimg.cc/Qx55TmRZ/lf30-editor-mpcfebd3-150x150.gif" />
                </center>

                <h4 className='mb-4 fw-bold text-uppercase'> add Bus Shedule</h4>

              <div className="row mb-4">
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Bus</InputLabel>
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
                  <InputLabel id="demo-simple-select-label">Select Route</InputLabel>
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
                        label="Select Date"
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
                    <TextField fullWidth 
                              id="outlined-basic" 
                              label="Hour" 
                              variant="outlined" 
                              />
                </div>

                <div className='col-5 pe-0'>
                    <TextField fullWidth 
                              id="outlined-basic" 
                              label="Minutes" 
                              variant="outlined"
                              />
                </div>
              </div>

              <div className="row mb-4">
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Up/Down</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Bus Type"
                  >
                    <MenuItem value={10}>Up</MenuItem>
                    <MenuItem value={20}>Down</MenuItem>
                  </Select>
                </FormControl>
              </div>

                <div className= "d-flex justify-content-center">
                    <Button type='submit' variant="contained" size='large'>Add Shedule</Button>
                </div>

            </form>
          </div>
        </div>
        </div>
      </Box>
    </Box>
  )
}
