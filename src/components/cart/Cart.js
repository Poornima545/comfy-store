import { useContext, useState } from "react";
import { CartContext } from './CartContext';
import { useNavigate } from "react-router-dom";

 function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleQtyChange = (e, id) => {
    setCount(e.target.value);
    console.log(count);
    dispatch({
      action: "UPDATE_ITEM_CART",
      value: { id, count: e.target.value },
    });
  };

  const handleRemove = (id) => {
    dispatch({ action: "REMOVE_ITEM_CART", value: { id } });
  };

  const handleCheckOut = () => {
    navigate("/orders");
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <hr />
      {state.items.length <= 0 && <h4>Add items to cart !</h4>}
      {state.items.map((item) => (
        <div key={item.id}>
          <h4>Item {item.id} </h4>
          {item.count}
          <select
            name="count"
            value={count}
            onChange={(e) => handleQtyChange(e, item.id)}
          >
            {[1, 2, 3, 4, 5].map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      {state.items.length > 0 && (
        <button onClick={handleCheckOut}>CheckOut</button>
      )}
    </div>
  );
}

export default Cart;