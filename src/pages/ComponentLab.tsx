import ProductCard from "../components/ProductCard";
import PriceSummary from "../components/PriceSummary";
import type { Product } from "../components/Product";

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
    <div style={styles.page}>
      <h2>Component Lab</h2>

      <section>
        <h3>Products</h3>
        <div style={styles.grid}>
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

const styles = {
  page: {
    maxWidth: 420,
    margin: "0 auto",
    padding: 16,
    fontFamily: "system-ui",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
  },
};
