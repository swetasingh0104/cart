import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Total from './Total';
class App extends React.Component{
constructor () {
  super();
  this.state = {
    products: [
      {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://t4.ftcdn.net/jpg/01/73/81/41/240_F_173814149_lA4Sgl2tPCWeLJaYFUP7U9h0klYykiOL.jpg',
          id:1
      },
      {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://tse1.mm.bing.net/th?id=OIP.ioMJsi__9PIQmCv6jDUKIAHaMh&pid=Api&P=0',
          id:2
      },
      {
          price: 70,
          title: 'Cover',
          qty: 1,
          img: 'https://tse2.mm.bing.net/th?id=OIP.ETxC6F1n4tjGqScOSL7iggHaJQ&pid=Api&P=0',
          id:3
      }
    ]
  }
  // this.increaseQuantity = this.increaseQuantity.bind(this);
}
handleIncreaseQuantity=(product) => {

  const {products}= this.state;

  const index = products.indexOf(product);
  
  products[index].qty += 1;
  this.setState({
      products
  })
}
handleDecreaseQuantity=(product) => {
 
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
getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count+=product.qty;
  })
  return count;
}
getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.forEach((product) => {
    cartTotal+=product.qty*product.price;
    
  })
  return cartTotal;
  
}

render(){

const {products} = this.state;
return (
  <React.Fragment>
      <div className="App">
      <Navbar 
        count ={this.getCartCount()}
      />
      <div className='additional'>
      < Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct} 
      />
      <div className='Total'>
      <Total 
        count ={this.getCartTotal()}
        />
      </div>
        
      
      </div>
      
  </div>
  </React.Fragment>
  
);

}

}

export default App;