import { useState } from "react";
import dummy from "../../utils/dummy_data";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [listedItem,setlistedItem] =useState(dummy);

    

    function debouncing(fn,d){
        let timer;
        return function(){
            let context=this;
            let args=arguments;
            clearTimeout(timer);
            timer=setTimeout(()=>{
    fn.apply(context,args);
            },d)
        }
    }

    const search=(value)=>{
        const finalresponse=listedItem.filter((response)=>{
        
    return( response.name.split(" ")[0]===value.target.value)
    
    })
    setlistedItem(finalresponse) ;
    }

  const Searchlisthandler = () => {
    return debouncing(search,2000);
  };

  const context = {
    list: listedItem,
    Searchlist:Searchlisthandler
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
