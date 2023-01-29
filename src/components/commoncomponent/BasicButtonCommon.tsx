import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtonCommon(props:any) {
    console.log("Props in common btn comp", props)
  return (
    <>
    {/* <h1>This is common button component</h1> */}
    <Stack spacing={2} direction="row">
      <Button variant={props.btnProps ? props.btnProps.variant : 'outlined'} onClick={props.btnClickHandler}>{props.btnProps ? props.btnProps.label : 'Default Label'}</Button>
    </Stack>
    </>
  );
}