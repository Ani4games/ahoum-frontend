interface QuantityStepperProps {
  value: number
  onIncrease: () => void
  onDecrease: () => void
  min?: number
}
export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  value,
  onIncrease,
  onDecrease,
  min = 0
}) => {
  const canDecrease = value > min;
  const canIncrease = true; // You might want to add a max prop here

  return (
    <div className="quantity-stepper">
      <button onClick={onDecrease} disabled={!canDecrease}>
        -
      </button>
      <span>{value}</span>
      <button onClick={onIncrease} disabled={!canIncrease}>
        +
      </button>
    </div>
  );
}
import React from 'react';
export default QuantityStepper;