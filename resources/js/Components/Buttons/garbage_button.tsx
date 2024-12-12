// GarbageButton.tsx
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type GarbageButtonProps = {
  onClick: () => void;  
  label?: string;       
};

const GarbageButton: React.FC<GarbageButtonProps> = ({ onClick, label = "Delete" }) => {
  return (
    <IconButton
      aria-label={label}
      size="large"
      onClick={onClick}  // Correctly passed as a prop
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default GarbageButton;
