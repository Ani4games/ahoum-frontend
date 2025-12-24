// src/pages/home/Home.tsx
import { products } from "../../data/products"
import  ProductCard  from "../../components/ProductCard"
import type { Product } from "../../types/product"
import sampleProduct from "../../components/Product"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b">
        <div className="max-w-7xl mx-auto flex flex-col gap-1">
          <span className="text-xs text-[#7C7C7C]">Deliver to</span>
          <h1 className="font-semibold text-[#181725]">
            Home, Bengaluru
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          
          {/* Section title */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#181725]">
              Exclusive Offers
            </h2>
            <button className="text-sm text-[#53B175] font-medium">
              See all
            </button>
          </div>

          {/* Product Grid */}
          <div
            className="
              grid grid-cols-2 gap-4
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {products.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={{...product, isFavorite: false, quantity: 0}}
                quantity={0}
                onAddToCart={() => {}}
                onToggleFavorite={() => {}}
                onClick={() => {}}
              />
            ))}
            <ProductCard
                key={sampleProduct.id}
                product={{...sampleProduct, isFavorite: false, quantity: 0}}
                quantity={0}
                onAddToCart={() => {}}
                onToggleFavorite={() => {}}
                onClick={() => {}}
              />
          </div>

        </div>
      </main>

      {/* Bottom spacing for mobile nav */}
      <div className="h-20 lg:hidden" />
    </div>
  )
}
export const runtime = "edge";
export const revalidate = 0;