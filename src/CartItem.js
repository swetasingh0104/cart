import React from "react";

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 0,
          img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
      }
      increaseQuantity = () => {
        // this.setState({
        //   qty: this.state.qty+1         //Shallow merging: it allows to make change only specific value of a state
        // }, () => {});

        this.setState((prevState) =>{
          return {qty: prevState.qty+1
          }
        });
      }
      decreaseQuantity = () => {
        // this.setState({
        //   qty: this.state.qty+1         //Shallow merging: it allows to make change only specific value of a state
        // }, () => {});

        this.setState((prevState) =>{
          if(prevState.qty>0)
          return {qty: prevState.qty-1
          }
          else
          return 0
        });
      }

    render(){
        const {price, title, qty}= this.state;
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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
              onClick={this.decreaseQuantity}
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