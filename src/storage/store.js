import products from '@/data/products';
import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      cartProducts: [
        {productId: 1, amount: 2},
      ]
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      const item = state.cartProducts.find(item => item.productId === payload.productId);

      if(item) {
        item.amount += payload.amount;
      }
      else {
        state.cartProducts.push({
          productId: payload.productId,
          amount: payload.amount,
        });
      };
    },
    updateCartProductAmount(state, {productId, amount}) {
      const item = state.cartProducts.find(item => item.productId === productId);

      if(item) {
        item.amount = amount;
      }
     },
     deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter(item => item.productId !== productId);
     }
// Можно переписать функцию так:
    // addProductToCart(state, {productId, amount}) {
    //   state.cartProducts.push({
    //     productId,
    //     amount,
    //   })
    // }
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map(item => {
        return {
          ...item,
          product: products.find(p => p.id === item.productId)
        }
      })
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.amount * item.product.price) + acc, 0);
    }
  },
});

export default store;
