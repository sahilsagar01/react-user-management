import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ActionAlert(props) {
  return (
    <Stack className=' z-10' sx={{ width: '100%' }} spacing={2}>
      <Alert severity={props.severity|| "error"}>{props.alertText}</Alert>
      {/* <Alert severity={props.severity|| "warning"}>This is a warning alert — check it out!</Alert>
      <Alert severity={props.severity|| "info"}>This is an info alert — check it out!</Alert>
      <Alert severity={props.severity|| "success"}>This is a success alert — check it out!</Alert> */}
    </Stack>
  );
}

export default ActionAlert;