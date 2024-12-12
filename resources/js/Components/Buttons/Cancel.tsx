interface CancelButtonProps {
  onClick: () => void;  
  label?: string;       
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick, label = "Cancel" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-300 text-white py-2 px-4 rounded hover:bg-gray-400"
    >
      {label}
    </button>
  );
};

export default CancelButton;
