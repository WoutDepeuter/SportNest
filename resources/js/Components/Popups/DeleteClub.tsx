import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import CancelButton from '../Buttons/Cancel';
import DeleteButton from '../Buttons/delete_button';

interface DeleteClubPopupProps {
  open: boolean;
  onClose: () => void; // Function to close the modal
  onDelete: () => void; // Function to confirm deletion
  clubName: string; // Name of the club to delete
}

const DeleteClubPopup: React.FC<DeleteClubPopupProps> = ({ open, onClose, onDelete, clubName }) => {
  const handleDelete = () => {
    onDelete(); // Trigger the deletion logic passed as a prop
    onClose(); // Close the modal after deletion
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          width: 400,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Confirm Deletion
        </Typography>
        <Typography gutterBottom>
          Are you sure you want to delete the club <strong>{clubName}</strong>?
        </Typography>
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-around' }}>
          
          <CancelButton onClick={onClose}/>
          
          <DeleteButton onClick={handleDelete}/>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteClubPopup;
