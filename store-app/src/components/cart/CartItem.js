import React from 'react'

/**
* @author
* @function CartItem
**/

const CartItem = ( { item, value } ) => {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value ;
  return(
    <div className="row my-1 text-capitalize text-center">  
        <div className="col-10 mx-auto col-lg-2">
            <img src={ require(`../../data/${img}`) } alt="aa" 
            style={{ width: "5rem", height: "5rem" }} 
            className="img-fluid"
            />
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product: </span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price: </span>
            {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 mylg-0">
            <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" onClick={ () => decrement(id) }>-</span>
                </div>
                <div>
                    <span className="btn btn-black mx-1">{count}</span>
                </div>
                <div>
                    <span className="btn btn-black mx-1" onClick={ () => increment(id) }>+</span>
                </div>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon my-2" onClick={() => removeItem(id)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span> Item total: {total}</span>
        </div>
    </div>
   )

 }

export default CartItem