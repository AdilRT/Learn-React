import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "cart_item_1", name: "Sushi", amount: 2, price: 12.99 }].map(
        (cartItem) => (
          <li>{cartItem.name}</li>
        )
      )}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total AMount</span>
        <span>99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};
