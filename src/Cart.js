import React from 'react';
// import CartItem inside Cart
import CartItem from './Cartitem';

class Cart extends React.Component{
    constructor (){
        // constructor of parent class
        super();
        this.state = {
        products: [
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
    // for increase quantity function
    handleIncreaseQuantity= (product) => {
        console.log("hey please increase the quantity of", product);
        
        const { products }= this.state;
        
        const Index= products.indexOf(product);
        products[Index].Qty +=1;
        this.setState({
            products: products
        })
    }

    // for decrease quantity function
    handleDecreaseQuantity= (product) => {
        console.log("hey please decrease the quantity of", product);
        
        const { products }= this.state;
        
        const Index= products.indexOf(product);
        if(products[Index].Qty == 0){
            return;
        }
        products[Index].Qty -=1;
        this.setState({
            products: products
        })
    }
    // for deleting the product
    handleDeleteProduct= (id) => {
        console.log("hey please delete the product of id", id);

        const {products }= this.state;
        // this method will return an array which not contain the item with given id
        const items= products.filter((item) => item.id != id);
        this.setState({
            products: items
        })
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
                        <CartItem 
                        // props
                        product={product} 
                        key={product.id}
                        // we are passing the func as a prop
                        onIncreaseQuantity= {this.handleIncreaseQuantity}
                        onDecreaseQuantity= {this.handleDecreaseQuantity}
                        onDeleteItem={this.handleDeleteProduct}
                        /> 
                    )      
                })}
            </div>         
        );
    }
}
export default Cart;