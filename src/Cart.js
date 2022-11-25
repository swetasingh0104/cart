import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {products} = props;
    return (
        <div className="Cart">
            {products.map((pr) =>{
                return <CartItem 
                product = {pr } 
                key={pr.id}
                onIncreaseQuantity = {props.onIncreaseQuantity}
                onDecreaseQuantity = {props.onDecreaseQuantity}
                onDeleteProduct = {props.onDeleteProduct}
                />
            })}
        </div>
    );
}



export default Cart