import React from "react";

const CartContext= React.createContext({
    list:[],
    filterlist:(item)=>{},
    Searchlist:(item)=>{}
});

export default CartContext;