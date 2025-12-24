// src/types/cart.ts
import  { type Product }  from "./product"

export interface CartItem extends Product {
  quantity: number
}
