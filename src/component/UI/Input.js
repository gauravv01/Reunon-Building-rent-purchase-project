import React from 'react';
import classes from './Input.module.css';

const Input=((props)=>{
return(
        <input onInput={props.onInput} type='text' className={classes.input} placeholder='Search with Search Bar' />
   
)
});

export default Input;