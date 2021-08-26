import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Backdrop } from "@material-ui/core";

const useStyles = makeStyles({
  inputStyle: 'red'
  
})


const Input = () => {
  const classes =useStyles();

  return <input className={classes.inputStyle} />;
};

export default Input;
