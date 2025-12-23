import type { ProductCardProps } from "./ProductCardProps"

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
    onToggleFavorite,
    onClick,
}) => {
  return (
    <div className="product-card" onClick={onClick}>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-button" onClick={(e) => { e.stopPropagation(); onAddToCart(); }}>
            Add to Cart
        </button>
        <button className="favorite-button" onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}>
            {product.isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    </div>
  )
}
export default ProductCard