import React, { useState } from 'react';
import LeaveReviewPopup from '@/Components/Popups/review';

const LeaveReviewButton: React.FC<{ sportClubId: number }> = ({ sportClubId }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a
        href="#"
        onClick={handleOpen}
        className="inline-flex items-center bg-white text-2xl font-bold px-6 py-3 border border-gray-400 rounded-lg m-4 shadow-md hover:bg-gray-300"
      >
        LEAVE A REVIEW
      </a>

      <LeaveReviewPopup open={open} onClose={handleClose} sportClubId={sportClubId} />
    </div>
  );
};

export default LeaveReviewButton;
