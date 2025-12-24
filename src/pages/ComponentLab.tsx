import ProductCard from "../components/ProductCard";
import PriceSummary from "../components/PriceSummary";
import type { Product } from "../components/Product";
import styles from "./ComponentLab.module.css";
export default function ComponentLab() {
  const product: Product = {
    id: "1",
    name: "Fresh Apple",
    image: "/apple.png",
    price: 30,
    quantity: 1,
    isFavorite: false,
    unit: "1kg",
  };

  return (
    <div className={styles.page}>
      <h2>Dhaka, Bansara</h2>

      <section>
        <h3>Products</h3>
        <div className={styles.grid}>
          <ProductCard
            product={product}
            quantity={product.quantity}
            onAddToCart={() => console.log("add to cart")}
            onToggleFavorite={() => console.log("toggle favorite")}
            onClick={() => console.log("product click")}
          />

          <ProductCard
            product={{ ...product, id: "2", name: "Banana" }}
            quantity={0}
            onAddToCart={() => {}}
            onToggleFavorite={() => {}}
            onClick={() => {}}
          />
        </div>
      </section>

      <PriceSummary subtotal={60} delivery={20} total={80} />
    </div>
  );
}


