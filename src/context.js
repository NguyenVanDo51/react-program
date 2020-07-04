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

    this.setState( () => {
      return { products: tempProducts }
    })
  }

  getItem = (id) => {
    const product = this.state.products.find ( item => item.id === id);
    return product;
  }

  // tang so luong
  increment = (id) => {
    let tempProducts = [...this.state.cart];
    let index = tempProducts.indexOf(this.getItem(id));
    let subTotal = this.state.cartSubTotal;

    tempProducts[index].count += 1;
    tempProducts[index].total = tempProducts[index].count * tempProducts[index].price;
    subTotal += tempProducts[index].price;
    this.setState(() => {
      return {cart: tempProducts, cartSubTotal: subTotal, cartTotal: subTotal}
    });

    ;
  }

  // giam so luong
  decrement = (id) => {
    let tempProduct = [...this.state.cart];
    let index = tempProduct.indexOf(this.getItem(id));

    if(tempProduct[index].count > 1){
      tempProduct[index].count -= 1;
      tempProduct[index].total -= tempProduct[index].price;
      let subTotal = this.state.cartSubTotal;
      subTotal -= tempProduct[index].price;
      this.setState( () => {
        return {
          cart: tempProduct,
          cartSubTotal: subTotal, 
          cartTotal: subTotal
        }
      })
    }
  }

  removeItem = (id) => {
    let cart = [...this.state.cart];
    let index = cart.indexOf(this.getItem(id));


    // cap nhat lai incart trong cac products
    let products = [...this.state.products];
    products[index].inCart = false;

    // cap nhat lai cartTotal
    let cartSubTotal = this.state.cartSubTotal;
    let cartTotal = this.state.cartTotal;

    cartSubTotal -= cart[index].count * cart[index].price;
    cartTotal = cartSubTotal;

    // xoa cai vi tri index khoi cart
    cart.splice(index, 1);

    this.setState( () => {
      return {
        cart: cart,
        products: products,
        cartSubTotal: cartSubTotal,
        cartTotal: cartTotal
      };
    })
    console.log("this is removeItem method", this.state.cart);
  }

  clearCart = () => {
    this.setProducts();
    this.setState( () => {
      return {    
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0}
    })
    console.log("Clear cart");
  }

  modalOpen = id => {
    const product = this.getItem(id);
    this.setState( () => {
      return {modalProduct: product, modalOpen: true};
    })
  }

  modalClose = () => {
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

    // them gia tri vao total

    let cartSubTotal = this.state.cartSubTotal;
    cartSubTotal += product.price; 
    // cap nhat lai state
    this.setState( () => {
      return {
        products: tempProducts, 
        cart: [...this.state.cart, product], 
        cartSubTotal: cartSubTotal,    // them product vao cart
        cartTotal: cartSubTotal
      }; 
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