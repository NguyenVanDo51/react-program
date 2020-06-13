import React, { Component } from 'react';
import Context from '../context';
import styled from 'styled-components';
import ButtonContainer from './Button';
import { Link } from 'react-router-dom'

class Details extends Component {
   constructor(props) {
      super(props);
      this.id = props.match.params.id;
   }

 render() {
   return(
          
      <Context.ProductConsumer>
         {
            (value) => {
               const { products } = value ;
               let product = products.filter( (product) => product.id === parseInt(this.id));
               if(product.length <1 ) return null;
               let { id, title, img, price, company, info, inCart, count, total } = value.detailProduct;
               return (
                  <DetailContainer className="container my-5 px-3">  
                     {/* product title */}
                     <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                     </div>
                     {/* end title */}

                     {/* products info */}
                        <div className="row">
                        <div className="col-10 col-md-6 my-3 mx-auto text-capitalize text-right"> 
                           <div className="img-container">
                              <img src={require(`../data/${img}`)} alt="aa" className="img-fluid"/>
                           </div>
                        </div>
                        <div className="col-10 col-md-6 my-3 mx-auto text-capitalize"> 
                           <div>
                              <h1>{ `Model : ${title} `}</h1>
                              <h3 className="text-uppercase text-title text-muted mt-3 mb-2">
                                 Make by : 
                                 <span className="text-uppercase">{company}</span> 
                              </h3>
                              <h4 className="text-blue">
                                 Price :  <span>$</span>
                                 {price}
                              </h4>
                              <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info About product: </p>
                              <p className="text-muted lead">{info}</p>

                              {/* Buttons */}
                              <div>
                                 <Link to="/">
                                    <ButtonContainer className="text-capitalize">back to product</ButtonContainer>
                                 </Link>

                                 <ButtonContainer
                                    cart
                                    disabled={ inCart ? true : false }  /* inCart === false thi cho phep dc click */
                                    onClick={() => {
                                       value.addToCart(id);
                                       value.openModal(id);
                                    }}
                                 >
                                    { inCart ? "In cart" : "Add to Cart"}  {/* neu da co trong gio hang roi thi ko cho them nua */}
                                 </ButtonContainer>
                              </div>
                           </div>
                        </div>
                     </div>           
                  </DetailContainer>
               );
            }
         }
      </Context.ProductConsumer>
      
      )
      }
}

const DetailContainer = styled.div `

`;

export default Details