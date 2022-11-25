import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    render(){
        return (
            <div className="Cart">
                <h1> CART</h1>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}


export default Cart