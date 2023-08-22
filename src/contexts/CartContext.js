import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

//const [cart, setCart] = useState([]);
const [cart, setCart]= useLocalStorage("s11g1",[])
  const addItem = (item) => {
    setCart([...cart, item])
  };
  const removeItem = (id) =>{
    setCart(cart.filter((item) => item.id !==id))
  }


  
  return (
    <CartContext.Provider value={{cart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider