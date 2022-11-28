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
  this.db =firebase.firestore()
  // this.increaseQuantity = this.increaseQuantity.bind(this);
}

componentDidMount(){
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) =>{
  //   const products= snapshot.docs.map((doc) =>{
  //     const data = doc.data();
  //     data["id"]= doc.id;
  //     return data;
  //   });
  //   this.setState({
  //     products:products,
  //     loading:false
  //   })
  // })
  this.db
  .collection('products')
  .onSnapshot((snapshot) =>{
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
  const docRef = this.db.collection('products').doc(products[index].id);
  
  docRef
  .update({
    qty: products[index].qty+1
  })
  .then(() =>{
    console.log("Updated successfully")
  })
  .catch((err) => {
    console.log("Error : ", err);
  })
  this.setState({
      products
  })
}
handleDecreaseQuantity=(product) => {
 
  const {products}= this.state;

  const index = products.indexOf(product);
  
  if(products[index].qty===0)
  return;
const docRef = this.db.collection('products').doc(products[index].id);
docRef
.update({
  qty: products[index].qty-1
})
.then(() =>{
  console.log("quantity decreased successfully")
})
.catch((err) => {
  console.log("Error : ", err);
})
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

addProduct =() =>{
  this.db
  .collection('products')
  .add({
    img: 'https://tse1.mm.bing.net/th?id=OIP.dp-nNvKXYs2hS0o2tcOkWAHaJF&pid=Api&P=0',
    title: "Washing Machine",
    qty: 3,
    price: 2999
  })
  .then((docRef)=>{
    console.log("product has been added", docRef);
  })
  .catch((err)=>{
    console.log('error:', err);
  })

}

render(){

const {products, loading} = this.state;
return (
  <React.Fragment>
      <div className="App">
      <Navbar 
        count ={this.getCartCount()}
      />
      {/* <button onClick={this.addProduct}>Add a product</button> */}
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