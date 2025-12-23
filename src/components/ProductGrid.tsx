interface ProductGridProps {
  children: React.ReactNode
}
export const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return <div className="product-grid">{children}</div>;
}
import React from 'react';
export default ProductGrid;