import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Display =()=>{

   /* return(
        <TextField id="filled-basic" label="Filled" variant="filled" />
    );*/

    return(

        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

    );
};

export default Display;