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

  const [target, setTarget] = useState({
    val: ''
  });

  const onChangeHandler = (event) => {
    setTarget({...target, [event.target.name]:event.target.value});
  };

  const onSubmitHandler = () => {};

  const reversed = (str) => {
    return str.split('').reverse().join('');
  };

  return (
    <Fragment>
      <Typography variant="h3">Reversed Input</Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          label="input"
          name="val"
          variant="outlined"
          onChange={onChangeHandler}
          required
        >
          Input
        </TextField>
        <Button variant="contained" color="primary" onClick={onSubmitHandler}>
          Submit
        </Button>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <TableCell>Output</TableCell>
        <TableCell>{reversed(target.val)}</TableCell>
      </Grid>
    </Fragment>
  );
}

export default App;
