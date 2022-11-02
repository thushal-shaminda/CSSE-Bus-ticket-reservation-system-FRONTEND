import React from 'react'

export default function AddTimeTable() {
  return (
    <div className="card position-absolute top-50 start-50 translate-middle card-signin">
            <div className="card-body py-5 px-md-5">
              <form>
            <img className='gif-image' src="https://i.postimg.cc/tTpCYL4j/34600-bus-ticket.gif" />
                {/* <h3 className='mb-4'>Add a New Bus</h3> */}
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

                    
              </form>
            </div>
          </div>
  )
}
