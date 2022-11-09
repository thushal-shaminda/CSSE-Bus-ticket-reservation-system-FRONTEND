import React, { useState } from 'react'
import Header from '../Header/Header';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Button } from '@mui/material';

import './busRoute.css'

export default function AddBusroutes() {

  const [inputFields, setInputFields] = useState([{name: '', age: ''}])

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = () => {
    let newfield = { name: '', age: '' }

    setInputFields([...inputFields, newfield])
}

const removeFields = (index) => {
  let data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <form>
        <div className="container mt-5 pt-3">
          <div className="row">
          <div className="col-md-6">
        <div className="card d-flex justify-content-center card-add-timetable">
          <div className="card-body py-5 px-md-5">
            
                <center>
                <img className='gif-image-timetable' src="https://i.postimg.cc/TYXCB6R2/78890-finding-route.gif" />
                </center>

                <h4 className='mb-4 fw-bold text-uppercase'> add new Bus route</h4>

              <div className="row mb-4">
                <TextField
                      id="outlined-textarea"
                      label="Enter Route Number"
                      // size="small"
                  />
              </div>

              <div className="row mb-4">
              <div className='col-6 ps-0'>
                    <TextField fullWidth id="outlined-basic" label="Starting point" variant="outlined" />
                </div>

                <div className='col-6 pe-0'>
                    <TextField 
                        fullWidth id="outlined-basic" label="Destination point" variant="outlined" />
                </div>
              </div>

              <div className="row mb-4">
                  <TextField
                      id="outlined-textarea"
                      label="Enter Distance"
                  />
              </div>

              <div className="row mb-4">

                <div className='col-6 ps-0'>
                    <TextField fullWidth id="outlined-basic" label="Total Price" variant="outlined" />
                </div>

                <div className='col-6 pe-0'>
                    <TextField fullWidth id="outlined-basic" label="Total Time" variant="outlined" />
                </div>
              </div>
                <div className= "d-flex justify-content-center">
                    <Button variant="contained" size='large'>ADD ROUTE</Button>
                </div>
          </div>
        </div>
        </div>

        <div className="col-md-6">
          <div className="card d-flex justify-content-center card-add-route">
            <div className="card-body py-5 px-md-5">
             

                <h5 className='mb-4 fw-bold text-uppercase'> add stations</h5>

                 {inputFields.map((input, index) => {
          return (
            <div key={index}> 
                
                <div className="row mb-4">
                  <div className='col-4 ps-0'>
                    <TextField
                          id="outlined-textarea"
                          label="Station"
                          onChange={event => handleFormChange(index, event)}
                          // size="small"
                      />
                  </div>
                  <div className='col-3 ps-0'>
                    <TextField
                          id="outlined-textarea"
                          label="Distance(km)"
                          onChange={event => handleFormChange(index, event)}
                          // size="small"
                      />
                  </div>
                  <div className='col-3 ps-0'>
                    <TextField
                          id="outlined-textarea"
                          label="Time (Min)"
                          onChange={event => handleFormChange(index, event)}
                          // size="small"
                      />
                  </div>
                  <div className='col-1 ps-0 d-flex justify-content-center'> 
                      <div className='btn-add pt-2'>              
                        <h2 onClick={addFields}><i class="bi bi-plus-circle-fill"></i></h2>
                      </div>
                  </div>

                  <div className='col-1 ps-0 d-flex justify-content-center'>
                    <div className='btn-remove cursor-pointer pt-2'>
                      <h2 onClick={() => removeFields(index)}><i class="bi bi-dash-circle-fill"></i></h2>
                      </div>
                  </div>

                </div>
                </div>
            )
          })}
              </div>
              </div>
              
              
        </div>
        </div>
        </div>
        
        </form>
    
      </Box>
    </Box>
  )
}
