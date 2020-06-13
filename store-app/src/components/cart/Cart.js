import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import Context from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

/**
* @author
* @class Cart
**/

class Cart extends Component {
 render() {
    return(
      <section>
        
        <Context.ProductConsumer>
          { (value) => {
            return (
              !(value.cart.length < 1) ? 
              ( <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment> ) 
              : 
              ( <EmptyCart /> )
            );
          }}
        </Context.ProductConsumer> 
      </section>
    )
   }
}

export default Cart;