
type PostButtonProps = {
    onClick: () => void; // Function to call when the button is clicked
    label?: string;      // Optional label for the button
};

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const PostButton: React.FC<PostButtonProps> = ({ onClick}) => {
    return (
        <Button 
            variant="contained" 
            endIcon={<SendIcon />} 
            onClick={onClick} // Correctly passed as a prop
        >
            Post
        </Button>
    );
};

export default PostButton;
