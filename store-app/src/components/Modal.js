import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonContainer from './Button'
import Context from '../context';
import { Link } from 'react-router-dom';

class Modal extends Component {
 state = {}
 render() {
  return(
   <Context.ProductConsumer>
     {
       (value) => {
         const { modalOpen, closeModal } = value;
         const { img, title, price } = value.modalProduct;
        console.log(value);

         if( !modalOpen ){
           return null ;
         } 

         return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>Item added to the cart</h5>
                    <img src = { require(`../data/${img}`) } alt=" a" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: $ {price}</h5>
                    <Context.ProductConsumer>
                      {
                        value => 
                        <div>
                          <Link to="/" onClick= { () => {
                            return closeModal() ;
                          } }
                          >
                            <ButtonContainer className="my-2">Continue shopping</ButtonContainer>
                          </Link>
                          <Link to="/store">
                            <ButtonContainer cart onClick={ () => { return closeModal(); }}>Go to the cart</ButtonContainer>
                          </Link>                 
                        </div>             

                      }
                    </Context.ProductConsumer>
                  </div>
                </div>
              </div>
            </ModalContainer>
         );
       }
     }
   </Context.ProductConsumer>
    )
   }
 }

const ModalContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background-color: var(--mainWhite);
  }
`;

export default Modal;