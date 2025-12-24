import type { ProductCardProps } from "./ProductCardProps"
import styles from "./ProductCard.module.css"
// import { useCartStore } from "../stores/cartStore"
// import type { Product } from "./Product"



const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
    onToggleFavorite,
    onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <button className={styles.button} onClick={(e) => { e.stopPropagation(); onAddToCart(); }}>
            Add to Cart
        </button>
        <button className={`${styles.button} ${styles.secondary}`} onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}>
            {product.isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    </div>
    
  )
}
export default ProductCard;