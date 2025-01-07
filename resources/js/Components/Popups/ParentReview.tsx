import React, { useState } from 'react';
import { Button } from '@mui/material';
import LeaveReviewPopup from '@/Components/Popups/review';

const ParentReview: React.FC<{ sportClubId: number }> = ({ sportClubId }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Leave a Review
      </Button>

      <LeaveReviewPopup open={open} onClose={handleClose} sportClubId={sportClubId} />
    </div>
  );
};

export default ParentReview;
