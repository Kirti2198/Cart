import React from 'react';

class CartItem extends React.Component{
    constructor (){
        // constructor of parent class
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            Qty: 1,
            img: ''
        }
        /* binding for accesing the 'this' keyword if we have multiple event handler this.increaseQuantity=this.increaseQuantity.bind(this); 
        or we can use arrow function */      
    }
    // arrow function
    increaseQuantity = ()=> {
        console.log('this', this.state);
    }
    render(){
        const{price, title, Qty }= this.state;
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>

            <div className="right-block">
                 <div style={ { fontSize:25 } }>{title}</div>
                 <div style={ { color: '#777' } }>{price}</div>
                 <div style={ { color: '#777' } }>{Qty}</div>
                 <div className="cart-item-actions">
                     {/* Buttons */}
                     <img alt="increase"
                      className="action-icons" 
                      src="https://image.flaticon.com/icons/svg/992/992651.svg"
                      onClick={this.increaseQuantity} // whenever i click this icon increaseQuantity function will be called

                      />

                     <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg" />
                     <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345874.svg" />
                 </div>
            </div>
        </div>
        );
    }
}

// we can style our items using objects
const styles={
    image: {
        height:110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;