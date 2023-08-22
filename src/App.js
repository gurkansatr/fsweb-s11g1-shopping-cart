import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import ProductContextProvider, { ProductContext } from "./contexts/ProductContext";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContextProvider from "./contexts/CartContext";

function App() {


  return (
    <div className="App">
      <CartContextProvider>
      <ProductContextProvider>  
      <Navigation />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
      
      </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
