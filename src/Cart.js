import React from 'react';
// import CartItem inside Cart
import CartItem from './Cartitem';

const Cart =(props) => {
    // you can't write const arr here
    
        // const arr=[1,2,3,4,5];
        // get products from this.state
        const { products }= props;
        return(
            <div className="cart">
                {products.map((product)=>{
                    // here key is not a prop it is for internal react purposes
                    return (
                        <CartItem 
                        // props
                        product={product} 
                        key={product.id}
                        // we are passing the func as a prop
                        onIncreaseQuantity= {props.onIncreaseQuantity}
                        onDecreaseQuantity= {props.onDecreaseQuantity}
                        onDeleteItem={props.onDeleteItem}
                        /> 
                    )      
                })}
            </div>         
        );
    
}
export default Cart;