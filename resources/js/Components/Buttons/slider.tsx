import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


type RangeSliderProps = {
    min: number;              // Minimum value
    max: number;              // Maximum value
    step: number;             // Step interval
    value: number[];          // Default value range
    formatValue: (value: number) => string; // Function to format the value
    label: string;            // Label for the range
    onChange?: (value: number[]) => void;
  };

  export default function RangeSlider({
    min,
    max,
    step,
    value,
    formatValue,
    label,
    onChange,
  }: RangeSliderProps) {

    const [sliderValue, setSliderValue] = React.useState<number[]>(value); // Set initial value

    const handleChange = (event: Event, newValue: number | number[]) => {
      setSliderValue(newValue as number[]);
      if (onChange) {
          onChange(newValue as number[]);
      }
    };

    return (
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => label}
          value={sliderValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={formatValue}
          min={min}
          max={max}
          step={step}
        />
      </Box>
    );
  }
