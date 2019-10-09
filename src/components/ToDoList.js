import React, { useReducer } from 'react'
import { initialState, reducer } from '../reducers/AddToDo';

import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    list: {
      margin: '100px auto'
    },
    items: {
      margin: '50px auto'
    },
  }));

const ToDoList = props => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    return (
        <>
        <ToDoForm dispatch = {dispatch}/>
        <div className={classes.list}>
            <Typography variant="h4" component="h3">
            To Do List
            </Typography>
            <div className={classes.items}>
                {state.map(item => (
                    <ToDo key={item.id} item={item} />
                ))}
            </div>
        </div>
        </>
    )
}

export default ToDoList;






