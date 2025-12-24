import CartItem from "../components/CartItem";
import PriceSummary from "../components/PriceSummary";
import type Product  from "../components/Product";
import styles from "./Cart.module.css";

const cart: Product[] = [
  {
    id: "1",
    name: "Fresh Apple",
    image: "/apple.png",
    price: 30,
    isFavorite: false,
    quantity: 2,
  },
];
    
export default function CartPage() {
  return (
    <div className={styles.cart}>
      <h1>My Cart</h1>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => {}}
              onDecrease={() => {}}
              onRemove={() => {}}
            />
          ))}
        </div>

        <PriceSummary subtotal={60} delivery={20} total={80} />
      </div>
    </div>
  );
}
