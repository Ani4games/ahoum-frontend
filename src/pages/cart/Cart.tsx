// src/pages/cart/Cart.tsx
import { useState } from "react"
import { type Product } from "../../types/product"
// import { useCartStore } from "../../stores/cartStore"
// const {
//   items,
//   increaseQty,
//   decreaseQty,
//   removeFromCart,
// } = useCartStore()

const mockCart: (Product & { quantity: number })[] = [
  {
    id: "1",
    name: "Organic Apples",
    unit: "1kg",
    price: 120,
    image: "https://via.placeholder.com/150",
    quantity: 2,
  },
  {
    id: "2",
    name: "Fresh Bananas",
    unit: "12 pcs",
    price: 60,
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
]

export default function Cart() {
  const [cart] = useState(mockCart)

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const delivery = 30
  const total = subtotal + delivery

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg font-semibold text-[#181725]">
            My Cart
          </h1>
        </div>
      </header>

      <main className="px-4 py-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 flex gap-4"
              >
                <img
                  src={item.image}
                  className="w-20 h-20 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-[#181725]">
                    {item.name}
                  </h3>
                  <span className="text-sm text-[#7C7C7C]">
                    {item.unit}
                  </span>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold">
                      ₹{item.price}
                    </span>

                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 border rounded-full">-</button>
                      <span>{item.quantity}</span>
                      <button className="w-8 h-8 border rounded-full">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-white rounded-xl p-4 h-fit lg:sticky lg:top-24">
            <h2 className="font-semibold mb-4">Summary</h2>

            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={() => window.location.href = "/order-success"}
              className="
                w-full h-12
                bg-[#53B175]
                text-white font-semibold
                rounded-xl
              "
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      </main>

      <div className="h-20 lg:hidden" />
    </div>
  )
}
