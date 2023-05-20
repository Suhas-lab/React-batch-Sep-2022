import React, { useEffect, useState } from 'react'
import BasicRating from './BasicRating'
import TextField from '@mui/material/TextField'
import BasicButtonCommon from '../commoncomponent/BasicButtonCommon'
import { useSelector } from 'react-redux'

interface StarValueProps {
    onRouteChange:any
}

const WelComePage = () => {
  const [starvalue, setStarvalue] = useState<any>(0);
  const [buttonProps, setbuttonProps] = useState({
    variant: 'text',
    label: 'Dashboard Button'
  });
  const loginStatus = useSelector((state: any) => console.log("state value",state.loginReducer));

  useEffect(() => {
    // console.log("loginStatus", loginStatus)
    return () => {
      
    };
  }, [loginStatus]);
  //Props will do communicate within component. WE can send data from one component to another component. using props
  return (
    <>
      <h1>Welcome to react development</h1>
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        value={starvalue}
        onChange={(e: any) => setStarvalue(e.target.value)}
      />
      <BasicRating starRating={starvalue} />
      <BasicButtonCommon btnProps={buttonProps} />
    </>
  )
}

export default WelComePage
