import React from 'react';
import classes from './mubutton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props}  className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;