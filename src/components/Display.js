import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


/*const theme = createTheme({
  palette: {
    primary: blue,

  },
});*/

const useStyles = makeStyles((theme) => ({
  Select:{
    width: '250px',
    height: '50px',
    backgroundColor:'white'
  }


}))

const Display =(theme)=>{


    return(

        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          
          className={theme.Select}
        >
          <MenuItem value=""  className={theme.primary}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

    );
};

export default Display;