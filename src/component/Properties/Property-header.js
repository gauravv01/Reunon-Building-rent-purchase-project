import { useContext } from "react";
import CartContext from "../store/CartContext";
import Input from "../UI/Input";
import classes from './Propertheader.module.css';


 const Propertyheader = (props)=>{

 const CartCtx= useContext(CartContext);

const InputHandler=(value)=>{
    
CartCtx.Searchlist(value);
}

return(
    <div className={classes.div}>
        <div>
        <h1>Search Properties to rent</h1>
        </div>
        <div>
        <Input onInput={InputHandler} />
        </div>
    </div>
)
}

export default Propertyheader;