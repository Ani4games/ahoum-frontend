import type { Product } from "./Product";

export interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
  onClick: () => void;
}
