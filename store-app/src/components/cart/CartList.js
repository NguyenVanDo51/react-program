import React from 'react'
import CartItem from './CartItem'

/**
* @author
* @function CartList
**/

const CartList = ({value}) => {
    const {cart} = value;

  return(
    <div className="container-fluid text-center">
        {
            cart.map( (item) => {
                return (
                    <CartItem key={item.id} item={item} value={value} />
                );
            })
        }
    </div>
   )

 }

export default CartList