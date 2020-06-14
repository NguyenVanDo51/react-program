import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Confirm from './components/cart/Confirm';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/store" component={Cart} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/" exact component={ProductList} />
        <Route component={Default} />
      </Switch>
      
      <Modal />
    </React.Fragment>
  );
}

export default App;
