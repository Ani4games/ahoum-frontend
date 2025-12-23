interface PriceItem {
  name: string
  price: number
}

interface PriceSummaryProps {
  items?: PriceItem[]
  tax?: number
  subtotal: number
  delivery: number
  total: number
}
export const PriceSummary: React.FC<PriceSummaryProps> = ({
  items,
  tax = 0,
  delivery = 0,
  subtotal,
  total,
}) => {
  const computedSubtotal =
    subtotal !== undefined ? subtotal : (items?.reduce((s, it) => s + it.price, 0) ?? 0)

  return (
    <div>
      <h3>Price Summary</h3>

      {items && items.length > 0 && (
        <div className="mb-2">
          {items.map((it, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{it.name}</span>
              <span>${it.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}

      <p>Subtotal: ${computedSubtotal.toFixed(2)}</p>
      {delivery !== 0 && <p>Delivery: ${delivery.toFixed(2)}</p>}
      {tax !== 0 && <p>Tax: ${tax.toFixed(2)}</p>}
      <p className="font-semibold">Total: ${total.toFixed(2)}</p>
    </div>
  )
}

export default PriceSummary