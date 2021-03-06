import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonContainer from './Button';
import logo from '../data/logo.svg';
import styled from 'styled-components';
import ControlTop from './ControlTop';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" id="top">
                <Link to="/">
                    <img src={logo} alt="a" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Product
                        </Link>
                    </li>
                </ul>
                <Link to='/store' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>
                <ControlTop target ="top" />
            </NavWrapper>
        );  
    }
}

const NavWrapper = styled.nav `
    background-color: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;