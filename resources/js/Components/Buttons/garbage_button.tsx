import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


type GarbageButtonProps = {
    onClick: () => void; // Function to call when the button is clicked
    label?: string;      // Optional label for the button
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
