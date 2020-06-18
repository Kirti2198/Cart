import React from 'react';


class CartItem extends React.Component{
   
        /* binding for accesing the 'this' keyword if we have multiple event handler this.increaseQuantity=this.increaseQuantity.bind(this); 
        or we can use arrow function */ 
        // this.testing();     
    
/*
    // testing(){
    //     const promise= new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },3000)
    //     });

    //     promise.then(()=>{
    //         // setState acts like a async call
    //         this.setState({ Qty: this.state.Qty+10});
    //         this.setState({ Qty: this.state.Qty+10});
    //         this.setState({ Qty: this.state.Qty+10});
    //         console.log('state',this.state);
    //     })
    // }
    // arrow function
    increaseQuantity = ()=> {
        // this.state.Qty++;
        // console.log('this', this.state);
        // we will use setState function which is iherited from React.Component
        //*******setState form 1
            // this.setState({
            //     Qty: this.state.Qty+1
            // });
        //*******setState form 2
        // // if prev state required use this
                this.setState((prevState)=>{
                    return{
                        Qty: prevState.Qty+1
                    }               
                },
                // ()=>{
                //     console.log(this.state);
                // }
                );
    }

    decreaseQuantity = ()=> {
        // here we are usinng destructuring
          const {Qty}=this.state;
          if(Qty===0){
              return;
          }
        
        // console.log('this', this.state);
        // we will use setState function which is iherited from React.Component
        //*******setState form 1
            // this.setState({
            //     Qty: this.state.Qty-1
            // });
        //*******setState form 2
        // if prev state required use this
                this.setState((prevState)=>{  
                        return{
                            Qty: prevState.Qty-1
                        }                            
                });
    } */
    render(){
        console.log('this.props',this.props);
        // console.log('render');
        // const{price, title, Qty }= this.state;
        // instead of state we can use props
        const{price, title, Qty, id }= this.props.product;
        const{product, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem }= this.props;
        return(
        <div className="cart-item">
            {this.props.jsx}
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
                      onClick={() => onIncreaseQuantity(product)}/> 
                       
                      

                     <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg"
                     onClick={() => onDecreaseQuantity(product)} // whenever i click this icon decreaseQuantity function will be called
                      />
                     <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345874.svg" 
                     onClick={() => onDeleteItem(product.id)}
                     />
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