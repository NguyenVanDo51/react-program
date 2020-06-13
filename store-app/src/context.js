import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../src/data/data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];

    storeProducts.forEach( (item) => {   // tempProduct la 1 mang object
      let singleItem = {...item};   // item la 1 object
      // Them singleItem vao cuoi mang tempProduct
      tempProducts = [...tempProducts, singleItem];
    })

    tempProducts[0].inCart = true;

    this.setState( () => {
      return { products: tempProducts }
    })
  }

  getItem = (id) => {
    const product = this.state.products.find ( item => item.id === id);
    return product;
  }

  increment = (id) => {
    console.log("this is increment method");
  }

  decrement = (id) => {
    console.log("this is decrement method");
  }

  removeItem = (id) => {
    console.log("this is removeItem method");
  }

  clearCart = () => {
    console.log("Clear cart");
  }

  modalOpen = id => {
    const product = this.getItem(id);
    this.setState( () => {
      return {modalProduct: product, modalOpen: true};
    })
  }

  modalClose = () => {
    console.log("modalClose");
    this.setState( () => {
      return { modalOpen: false } 
    });
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState( () => {
      return { detailProduct: product }
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];    // tao tham chieu den tempProduct[index]

    // thay doi gia tri dc tham chieu
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    // cap nhat lai state
    this.setState( () => {
      return {products: tempProducts, cart: [...this.state.cart, product]}; // them product vao cart
      }, () => {
      console.log(this.state);
    });
  }

 render() {
  return(
    <ProductContext.Provider value={
      {...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.modalOpen,
        closeModal: this.modalClose,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }
      }>
        {this.props.children}
    </ProductContext.Provider>
    )
   }
}

const ProductConsumer = ProductContext.Consumer;

export default { ProductProvider, ProductConsumer };