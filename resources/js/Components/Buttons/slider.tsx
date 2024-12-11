import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function formatPrice(value: number) {
  return `€${value}`;
}

export default function PriceRangeSlider() {
  const [value, setValue] = React.useState<number[]>([50, 500]); // Default price range

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={formatPrice}
        min={0} // Minimum price
        max={500} // Maximum price
        step={10} // Step interval
      />
    </Box>
  );
}
