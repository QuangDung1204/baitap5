 import { createSlice } from '@reduxjs/toolkit'

 const cart = JSON.parse(localStorage.getItem("cart ")) ?? [];

 const cartSlice = createSlice({
   name: 'cards',
   initialState: {
     cart : [...cart]
   },
   reducers : {
    addtoCart(state, action) {
      let cart = [...state.cart]
      cart.push(action.payload)
      state.cart = cart
      localStorage.setItem("cart", JSON.stringify(cart))
    },

    deleteCart: (state, action) => {
      const productId = action.payload;
      const foundProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      state.cart.splice(foundProductIndex, 1);
      
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
   },
})

export const { addtoCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer