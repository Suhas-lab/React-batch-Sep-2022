import {
  Box,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import BasicButtonCommon from '../commoncomponent/BasicButtonCommon'
import BasicTextFields from '../commoncomponent/BasicTextFields'

const cityList = [
  { id: 1, cityname: 'Pune', stateCode: 'mh' },
  { id: 1, cityname: 'Mumbai', stateCode: 'mh' },
  { id: 2, cityname: 'Ahmadabad', stateCode: 'gj' },
  { id: 3, cityname: 'Hydrabad', stateCode: 'hy' }
]

export default function RegistrationComponent () {
  const [formProps, setformProps] = useState({
    name: {
      label: 'User Name',
      name: 'uname',
      value: ''
    },
    phoneNo: {
      label: 'Phone No',
      name: 'phonno',
      value: ''
    },
    address: {
      label: 'Address',
      name: 'address',
      value: ''
    }
  })

  const [userData, setuserData] = useState<any>({})
  const [btnProperty, setbtnProperty] = useState({
    label: 'Submit',
    variant: 'contained'
  })
  const [age, setAge] = React.useState('')

  const [citylist, setcitylist] = useState<any>([])

  const captureUserDetails = (e: any) => {
    // console.log('Capture event', e)
    setuserData({
      ...userData,
      [e.target.name]: e.target.value
    })

    // userData:{
    //     username: 'Teste',
    //     phoneNo: '121212',
    //     address: pune
    // }
  }

  const submitUserData = () => {
    console.log('Submit data', userData)
  }

  const captureStateDetails = (e: any) => {
    const stateValue = e.target.value;
    setuserData({
        ...userData,
        [e.target.name]: stateValue
    });

    const filterCity = cityList.filter((item: any)=> item.stateCode === stateValue);

    console.log("filter city", filterCity)
    setcitylist([...filterCity]);
  }

  return (
    <>
      <h1>Register Yourself</h1>
      {console.log('userdata state values', userData)}
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete='off'
      >
        {/* <BasicTextFields formProps={formProps.name} onchangeinput={captureUserDetails} />
        <BasicTextFields formProps={formProps.phoneNo} />
        <BasicTextFields formProps={formProps.address} /> */}
        <TextField
          id='outlined-basic'
          label={'User Name'}
          variant='outlined'
          name={'username'}
          onChange={captureUserDetails}
        />
        <TextField
          id='outlined-basic'
          label={'Phone No'}
          variant='outlined'
          name={'phoneno'}
          onChange={captureUserDetails}
        />
        <TextField
          id='outlined-basic'
          label={'Address'}
          variant='outlined'
          name={'address'}
          onChange={captureUserDetails}
        />
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='gender'
          onChange={captureUserDetails}
        >
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={userData.state ? userData.state : 'Select State'}
          name='state'
          onChange={captureStateDetails}
        >
          <MenuItem value={'mh'}>Maharastra</MenuItem>
          <MenuItem value={'gj'}>Gujrat</MenuItem>
          <MenuItem value={'hy'}>Hydrabad</MenuItem>
        </Select>
        <Select
          labelId='demo-simple-select-city'
          id='demo-simple-select-city'
          value={userData.city ? userData.city : 'Select City'}
          name='city'
          onChange={captureUserDetails}
        >
          {citylist &&
            citylist.map((item: any, index: any) => (
              <MenuItem value={item.cityname} key={index}>{item.cityname}</MenuItem>
            ))}
        </Select>
        {/* <Typography variant="h1" component="span" gutterBottom>h6. Heading</Typography> */}
      {/* <h1>Heading</h1> */}
        <BasicButtonCommon
          btnProps={btnProperty}
          btnClickHandler={submitUserData}
        />
      </Box>
    </>
  )
}
