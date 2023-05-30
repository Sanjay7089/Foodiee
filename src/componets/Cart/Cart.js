import classes from "./Cart.module.css";
import Modal from "../UI/Modal.js";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items "]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.44 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>12.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};
export default Cart;
