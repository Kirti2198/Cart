import React from 'react';
// import CartItem inside Cart
import CartItem from './Cartitem';

class Cart extends React.Component{
    constructor (){
        // constructor of parent class
        super();
        this.state = {
            products:[
            {
                price: 99,
                title: 'Watch',
                Qty: 1,
                img: '',
                id:1
            },
            {
                price: 999,
                title: 'Phone',
                Qty: 10,
                img: '',
                id:2
            },
            {
                price: 1999,
                title: 'Laptop',
                Qty: 4,
                img: '',
                id:3
            }
        ]
       }
    }
    // you can't write const arr here
    render(){
        // const arr=[1,2,3,4,5];
        // get products from this.state
        const { products }= this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    // here key is not a prop it is for internal react purposes
                    return (
                        <CartItem product={product} key={product.id}/> 
                    )      
                })            
                }
            </div>         
        );
    }
}


export default Cart;