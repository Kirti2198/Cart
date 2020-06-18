import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor (){
    // constructor of parent class
    super();
    this.state = {
    products: [
        {
            price: 99,
            title: 'Watch',
            Qty: 1,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            id:1
        },
        {
            price: 999,
            title: 'Phone',
            Qty: 10,
            img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
            id:2
        },
        {
            price: 1999,
            title: 'Laptop',
            Qty: 4,
            img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
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
  getCartCount = () => {
    const {products} = this.state;

    let count =0;
    products.forEach((product) => {
      count += product.Qty;
    })
    return count;
  }

  getCartTotal = () => {
    const {products } = this.state;
    let cartTotal=0;
    products.map((product) => {
      cartTotal = cartTotal + product.Qty*product.price;
    });
    return cartTotal;
  }


  render(){
    const { products } = this.state;
  return (
    <div className="App">
      <Navbar
         count = {this.getCartCount()}
      />
      <Cart 
      // we are passing the func as a prop
        products ={ products}
        onIncreaseQuantity= {this.handleIncreaseQuantity}
        onDecreaseQuantity= {this.handleDecreaseQuantity}
        onDeleteItem={this.handleDeleteProduct}
      />
      <div style={{padding: 10, fontSize: 20}}>
        TOTAL:{this.getCartTotal()}
      </div>
    </div>
  );
  }
}

export default App;
