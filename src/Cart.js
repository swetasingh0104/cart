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
      handleIncreaseQuantity=(product) => {
        console.log("hey please inc the qty of ", product.title);
        const {products}= this.state;

        const index = products.indexOf(product);
        
        products[index].qty += 1;
        this.setState({
            products
        })
      }
      handleDecreaseQuantity=(product) => {
        console.log("hey please dec the qty of ", product.title);
        const {products}= this.state;

        const index = products.indexOf(product);
        if(products[index].qty=== 0)
            return 0;
        products[index].qty -= 1;
        this.setState({
            products
        })
      }
      handleDeleteProduct = (id) => {
            const {products}= this.state;
            const item = products.filter((item) => item.id!==id);
            this.setState({
                products:item
            })
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
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                    />
                })}
            </div>
        );
    }
}


export default Cart