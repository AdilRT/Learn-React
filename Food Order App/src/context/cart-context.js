import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedItems = prevState.items.concat(action.item);
    const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // else if(action.type === 'REMOVE_CART_ITEM') {

  // }

  return defaultCartState;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

export const CartProvider = (props) => {
  const [cartState, cartDispatchAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    cartDispatchAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatchAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
