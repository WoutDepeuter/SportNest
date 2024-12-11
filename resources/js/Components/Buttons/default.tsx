import Button from '@mui/material/Button';

type DefaultButtonProps = {
    text: string;  // Find club for exemple
  };

export default function Default({ text }: DefaultButtonProps) {
  
    return (
        <Button variant="contained">
      {text}  {/* Display the custom text */}
    </Button>

    );
  }