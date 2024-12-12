type DeleteButtonProps = {
    onClick: () => void; // Function to call when the button is clicked
    label?: string;      // Optional label for the button
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, label = "Delete" }) => {
    return (
        <button
            onClick={onClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
        >
            {label}
        </button>
    );
};

export default DeleteButton;
