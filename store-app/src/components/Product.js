import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import Context from '../context';

export default class Product extends Component {
   state = {
      inCart: this.props.product.inCart
   }

   handleEnter() {
      this.setState({inCart: false});
      console.log("mouse enter", this.state.inCart);
   }

   handleLeave() {
      this.setState({inCart: true});
   }

 render() {
   const { id, title, img, price, inCart} = this.props.product;

   return(
      <ProductContainer className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
         <Context.ProductConsumer>
            {
               (value) => (
                  <div className="img-container p-5" onClick={ () => value.handleDetail(id) }>
                     <Link to={`/details/${id}`}>
                        <img src={require(`../data/${img}`)} alt="s" className="card-img-top" />
                     </Link>
                     <button className="card-btn" disabled={ inCart ? true : false} 
                        onClick={() => {
                           console.log(value);
                           value.addToCart(id);
                           value.openModal(id);
                        }} 
                     >
                        {
                           inCart ? (
                              <p className="text-capitalize mb-0" disabled>
                                 {" "}
                                 In cart
                              </p>
                           ): (
                              <i className="fa fa-cart-plus" aria-hidden="true"></i>
                              )
                        }
                     </button>
                  </div>
               )
            }
         </Context.ProductConsumer>
         {/* footer */}
            <div className="card-footer d-flex justify-content-between mt-5">
               <p className="align-self-center mb-0"> {title} </p>
               <h5 className="text-blue font-italic mb-0">
                  <span className="mr-1">$</span>
                  {price}
               </h5>
            </div>
        </div>
      </ProductContainer>
    )
   }
}

Product.propType = {
   product: PropType.shape({
      id: PropType.number,
      img: PropType.string,
      title: PropType.string,
      price: PropType.number,
      company: PropType.string,
      info: PropType.string,
      inCart: PropType.bool,
      count: PropType.number,
      total: PropType.number
   }).isRequired
}

const ProductContainer = styled.div `
   .card {
      border-color: transparent;
      transition: all .6s linear;
   }

   .card-footer {
      background-color: transparent;
      border-top: transparent;
      transition: all 1s linear;
   }

   &:hover {
      .card {
         border: 0.04rem solid rgba(0, 0, 0, 0.2);
         box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      }

      .card-footer {
         background-color: rgba(247, 247, 247)
      }
   }

   .img-container {
      position: relative;
      overflow: hidden;

   }

   .card-img-top {
      transition: all 0.5s linear;
   }

   .img-container:hover {
      .card-img-top{
         transform: scale(1.2);     
      }

      .card-btn {
         transform: translate(0, 0);
      }
   }

   .card-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2rem 0.4rem;
      font-size: 1.4rem;
      background: var(--lightBlue);
      color: var(--mainWhite);
      border-radius: 0.5rem 0 0 0;
      border: none;
      transition: all 0.5s linear;
      transform: translate(100%, 100%);
   }

   .card-btn:hover {
      color: var(--mainBlue);
      cursor: poiter;
   }

`;