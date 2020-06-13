import React from 'react';
import styled from 'styled-components';

const ControlTop = (props) => {
  return(
    <Container>
        <a href={`#${props.target}`} alt="aas">
              <i class="fa fa-arrow-up" aria-hidden="true"></i>      
        </a>
    </Container>
   )
 }

const Container = styled.div `
    width: 3rem;
    height: 3rem;
    text-align: center;
    background-color: var(--mainBlue);
    border-radius: 50%;
    line-height: 3rem;
    color: white;
    font-size: 1.3rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    transition: all .3s linear;
    
    &:hover {
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        bottom: 1.5rem;
    }
`;

export default ControlTop