import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type BasicRatingProps = {
  value: number | null;      
  onChange: (event: React.ChangeEvent<{}>, newValue: number | null) => void; 
};

const BasicRating: React.FC<BasicRatingProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default BasicRating;