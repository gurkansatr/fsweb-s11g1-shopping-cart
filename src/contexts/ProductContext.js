import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { data } from "../data";

export const ProductContext = createContext();
const ProductContextProvider = ({children}) =>{
    const [products, setProducts] = useState(data);
    const {addItem} = useContext(CartContext)
    return(
        <ProductContext.Provider value={{ products, addItem }} >
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider