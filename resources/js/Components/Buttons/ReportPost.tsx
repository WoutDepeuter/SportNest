import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

type PostButtonProps = {
    onClick: () => void; // Function to call when the button is clicked
    label?: string;      // Optional label for the button
};

const ReportPost: React.FC<PostButtonProps> = ({ onClick }) => {
    return (
        <Button
            variant="contained"

            onClick={onClick}
            sx={{
                fontWeight: 'bold',
                backgroundColor: 'red',
                color: 'black', // Ensures the text is readable
                '&:hover': {
                    backgroundColor: 'darkred', // Changes color on hover
                    borderRadius: '10px',

                }
            }}
        >
            Post
        </Button>
    );
};

export default ReportPost;
