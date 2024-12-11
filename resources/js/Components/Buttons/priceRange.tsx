
import RangeSlider from './slider';

// Function to format price value
const formatPrice = (value: number) => `€${value}`;

function PriceRange() {
  return (
    <div>
      <h3>Price Range</h3>
      <RangeSlider
        min={0}               // Minimum price
        max={1000}            // Maximum price
        step={10}             // Step interval (increments of 10)
        value={[100, 500]}    // Default value range
        formatValue={formatPrice} // Custom format function
        label="Price Range"   // Accessibility label
      />
    </div>
  );
}

export default PriceRange;
