import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Rating, Typography } from '@mui/material';
import axios from 'axios';

interface LeaveReviewPopupProps {
  open: boolean;
  onClose: () => void;
  sportClubId: number; 
}

const LeaveReviewPopup: React.FC<LeaveReviewPopupProps> = ({ open, onClose, sportClubId }) => {
  const [rating, setRating] = useState<number | null>(2); 
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async () => {
    if (rating === null || reviewText.trim() === '') {
      alert('Please provide both a rating and a review.');
      return;
    }

    try {
      await axios.post('/review', {
        name: 'Anonymous',
        score: rating,    
        text: reviewText,
        sport_club_id: sportClubId,
      });
      alert('Review submitted successfully!');
      setRating(2);
      setReviewText('');
      onClose();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error response:', error.response?.data || error.message);
        alert(`Failed to submit review: ${error.response?.data?.message || 'An error occurred'}`);
      } else {
        console.error('Unexpected error:', error);
        alert('Failed to submit review: An unexpected error occurred.');
      }
    }
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
          style={{ color: 'black' }}
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
