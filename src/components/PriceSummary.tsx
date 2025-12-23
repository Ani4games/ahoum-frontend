interface PriceSummaryProps {
  subtotal: number
  delivery: number
  total: number
}
export const PriceSummary: React.FC<PriceSummaryProps> = ({ subtotal, delivery, total }) => {
    return (
        <div>
            <h3>Price Summary</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Delivery: ${delivery.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
}
export default PriceSummary;