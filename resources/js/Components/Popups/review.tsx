import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Rating, Typography } from '@mui/material';

interface LeaveReviewPopupProps {
  open: boolean;
  onClose: () => void; // Explicitly typing onClose as a function that takes no arguments and returns void
}

const LeaveReviewPopup: React.FC<LeaveReviewPopupProps> = ({ open, onClose }) => {
  const [rating, setRating] = useState<number | null>(2);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    if (rating === null || reviewText.trim() === '') {
      alert('Please provide both a rating and a review.');
      return;
    }

    console.log('Review Submitted:', { rating, reviewText });
    alert('Review submitted successfully!');

    setRating(2);
    setReviewText('');
    onClose(); 
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
        backgroundColor: 'white', padding: 4, borderRadius: 2, width: 400 }}>
        <Typography variant="h6" gutterBottom>
          Leave a Review
        </Typography>
        
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
        
        <TextField
          label="Write your review"
          multiline
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          fullWidth
          margin="normal"
        />
        
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
      </Box>
    </Modal>
  );
};

export default LeaveReviewPopup;
