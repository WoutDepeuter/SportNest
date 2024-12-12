import Button from '@mui/material/Button';

interface SubmitButtonProps {
  onClick?: () => void; 
  label: string; 
  disabled?: boolean; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <Button
      type="submit" // Make it submit button by default
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled} 
      className="w-full py-2"
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
