import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import './signin.css';
import { Button } from '@mui/material';


export default function Signin() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

      <div className="card position-absolute top-50 start-50 translate-middle card-signin">
            <div className="card-body py-5 px-md-5">
              
                <h4 className='text-uppercase fw-bold mb-3 signin-title'>administrator login</h4>
                <p>Let your customers book tickets online using a bus ticket reservation system. Login here</p>
              <form>
                <div className="row mb-4">
                <TextField
                    id="outlined-textarea"
                    label="Enter your email"
                    // size="small"
                />
                </div>


                <div className="row mb-4">
                <FormControl variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                     <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      // size="small"
                  />
          </FormControl>
                </div>

                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>

                <div className= "d-flex justify-content-center mt-2">
                    <Button variant="contained" size='medium'>Login here</Button>
                </div>
              </form>
            </div>
          </div>
  )
}