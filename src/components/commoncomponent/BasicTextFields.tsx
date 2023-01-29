import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function BasicTextFields(props: any) {
    console.log("Props in text field", props)
  return (
    <>
    {/* <Typography variant="subtitle1" component="h2">{props.formProps ? props.formProps.name.label : 'Default Label'}</Typography> */}
      <TextField id="outlined-basic" label={props.formProps ? props.formProps.label : 'Default Label'} variant="outlined" name={props.formProps ? props.formProps.name : 'default'} onChange={props.onchangeinput} />
    </>
  );
}