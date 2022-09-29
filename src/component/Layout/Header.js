import React , {Fragment} from 'react';
import Button from '../UI/Button';
import classes from './Header.module.css';

const Header = props=>{
    return(
<Fragment>
    <header className={classes.header}>
        <h3>
        <span>icon-</span>
        <span>Estatery</span>
        </h3>
        <div className={classes.button}>
        <button>Rent</button>
        <button>Buy</button>
        <button>Sell</button>
        <button>Manage Property</button>
        <select></select>
        <button>Resources</button>
        <select></select>
        </div>
        <div className={classes.authbutton}>
        <Button>Login</Button>
        <Button>Signup</Button>
        </div>
    </header>
</Fragment>
)}

export default Header;