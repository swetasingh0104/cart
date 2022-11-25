import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
         products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 0,
                img: '',
                id:1
            },
            {
                price: 99,
                title: 'Watch',
                qty: 0,
                img: '',
                id:2
            },
            {
                price: 70,
                title: 'Cover',
                qty: 0,
                img: '',
                id:3
            }
         ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
      }


    render(){

        const {products} =this.state;
        return (
            <div className="Cart">
                <h1> CART</h1>
                
                {products.map((pr) =>{
                    return <CartItem 
                    product = {pr } 
                    key={pr.id}
                    
                    />
                })}
            </div>
        );
    }
}


export default Cart