import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Total from './Total';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component{
constructor () {
  super();
  this.state = {
    products: [],
    loading:true
  }
  // this.increaseQuantity = this.increaseQuantity.bind(this);
}

componentDidMount(){
  firebase
  .firestore()
  .collection('products')
  .get()
  .then((snapshot) =>{
    const products= snapshot.docs.map((doc) =>{
      const data = doc.data();
      data["id"]= doc.id;
      return data;
    });
    this.setState({
      products:products,
      loading:false
    })
  })

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

const {products, loading} = this.state;
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
      {loading && <h1>Loading Data... please wait</h1>}
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