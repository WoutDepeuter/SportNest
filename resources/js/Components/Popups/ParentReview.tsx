import React, { useState } from 'react';
import { Button } from '@mui/material';
import LeaveReviewPopup from './review';

const ParentReview: React.FC = () => {
  const [open, setOpen] = useState(false); // State to control popup visibility

  // Function to open the popup
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the popup
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to trigger opening the popup */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Leave a Review
      </Button>

      {/* Passing the state to control the popup */}
      <LeaveReviewPopup open={open} onClose={handleClose} />
    </div>
  );
};

export default ParentReview;
