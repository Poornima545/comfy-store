import { createContext, useReducer } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

const initialState = { items: [], totalCount: 1 };

function cartReducer(state, payload) {

  const { action, value } = payload;
  switch (action) {
    case "ADD_ITEM_CART":
      return {
        ...state,
        items: [...state.items, value],
        totalCount: state.totalCount + +value.count,
      };
    case "UPDATE_ITEM_CART": {
      let prevItemState;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === value.id) {
            prevItemState = item;
            return { ...item, count: value.count };
          }
          return item;
        }),
        totalCount: state.totalCount + +value.count - prevItemState.count,
      };
    }
    case "CLEAR_ITEM_CART":
      return initialState;
    default:
      return state;
  }
}

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
