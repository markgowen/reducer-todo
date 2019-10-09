import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/AddToDo';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px auto'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  list: {
    margin: '100px auto'
  },
  items: {
    margin: '50px auto'
  }
}));

export default function ToDoForm(props) {
  const classes = useStyles();

  // State Management
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState('');

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Add New Task"
            className={classes.textField}
            value={newTask}
            onChange={handleChanges}
            margin="normal"
          />
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => {console.log(state)
              props.dispatch({ type: 'ADD_TODO', payload: newTask })}}
          >
            Add Task
          </Button>
        </form>
       
      </Paper>
    </div>
  );
}
