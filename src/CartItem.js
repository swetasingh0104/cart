import React from "react";

class CartItem extends React.Component{
  
     
    render(){
      //console.log(this.props.product)
        const {price, title, qty, id}= this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} =this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="img" src="https://t4.ftcdn.net/jpg/01/73/81/41/240_F_173814149_lA4Sgl2tPCWeLJaYFUP7U9h0klYykiOL.jpg"/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>{price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                     {/* Buttons */}
                     <img
              alt="increase"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
              onClick={()=>onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
              onClick={()=>onDeleteProduct(id)}
            />
                     </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width: 110,
        borderRadius : 4,
        background:'#ccc'
    }
}

export default CartItem