import React, { useReducer } from 'react'
import { initialState, reducer } from '../reducers/AddToDo';

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


const ToDo = props => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className={`${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.item}</p>
            <Checkbox
                value={props.item.completed}
                inputProps={{
                'aria-label': 'uncontrolled-checkbox'
                }}
                onClick={() => dispatch({ type: 'TOGGLE_COMPLETE'})}
            />
        </div>
    );
};

export default ToDo;