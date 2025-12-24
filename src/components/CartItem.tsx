import styles from "./Cartitem.module.css"
import React from 'react';
interface CartItemProps {
  item: CartItem
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}
export const CartItem: React.FC<CartItemProps> = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>Price: ${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button onClick={onIncrease} className={styles.button}>+</button>
      <button onClick={onDecrease} className={styles.button}>-</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export interface CartItem {
  image: string | undefined
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export default CartItem;