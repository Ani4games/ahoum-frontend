import { create } from "zustand"
import { type Product } from "../types/product"

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  increaseQty: (id: string) => void
  decreaseQty: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items
    const existing = items.find(i => i.id === product.id)

    if (existing) {
      set({
        items: items.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      })
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }]
      })
    }
  },

  removeFromCart: (id) =>
    set({
      items: get().items.filter(i => i.id !== id)
    }),

  increaseQty: (id) =>
    set({
      items: get().items.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    }),

  decreaseQty: (id) =>
    set({
      items: get().items
        .map(i =>
          i.id === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    }),

  clearCart: () => set({ items: [] }),
}))
