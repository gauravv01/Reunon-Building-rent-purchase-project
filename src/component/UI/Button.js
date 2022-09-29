import classes from './Button.module.css';

const Button=(props)=>{
    return(<button className={classes['button-9'] 

}  onClick={props.onClick}>{props.children}</button>)
}

export default Button;