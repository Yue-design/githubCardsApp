import React, { useState, Fragment } from "react";
import "./App.css";
import {
  Button,
  Grid,
  TableCell,
  TextField,
  Typography
} from "@material-ui/core";

function App() {

  const [inputVal, setInputVal] = useState('');

  const onChangeHandler = (event) => {
    setInputVal(event.target.value);
  };

  const handleReversed = () => {
    setInputVal(inputVal.split('').reverse().join(''));
  }

  return (
    <Fragment>
      <Typography variant="h3">Reversed Input</Typography>
      <Grid container direction="row" justify="left" alignItems="center">
        <TextField
          value={inputVal}
          onChange={onChangeHandler}
          placeholder="Enter a String"
          required
        >
          Input
        </TextField>
        <Button variant="contained" color="primary" onClick={handleReversed}>
          Reverse
        </Button>
      </Grid>
      <Grid container direction="row" justify="left" alignItems="center">
        <TableCell>The input is: </TableCell>
        <TableCell>{inputVal}</TableCell>
      </Grid>
      <Grid container direction="row" justify="left" alignItems="center">
        <TableCell>The reversed input is: </TableCell>
        <TableCell>{inputVal.split('').reverse().join('')}</TableCell>
      </Grid>
    </Fragment>
  );
}

export default App;
