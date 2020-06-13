import React, { Component } from 'react';
import Title from './Title';
import Context from '../context';
import Product from './Product';

/**
* @author
* @class ProductList
**/

class ProductList extends Component {

 render() {
  return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <Context.ProductConsumer>
                  {
                    (value) => {
                      return value.products.map( product => {
                        return <Product key={product.id} product= {product} />
                      })
                    }
                  }
                </Context.ProductConsumer>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
   }
 }


export default ProductList