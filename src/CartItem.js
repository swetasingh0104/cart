import React from "react";

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
      }
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="img" src="https://t4.ftcdn.net/jpg/01/73/81/41/240_F_173814149_lA4Sgl2tPCWeLJaYFUP7U9h0klYykiOL.jpg"/>
                </div>
                <div className="righ-block">
                    <div style={ { fontSize: 25 } }>Phone</div>
                    <div style={ { color: '#777' } }>Rs 999</div>
                    <div style={ { color: '#777' } }>Qty: 1</div>
                    <div className="cart-item-actions">
                     {/* Buttons */}
                     <img
              alt="increase"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
              
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
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