import React from 'react';

interface CreateEventButtonProps {
  onClick: () => void;
}

const CreateEventButton: React.FC<CreateEventButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-200"
    >
      Create New Event
    </button>
  );
};

export default CreateEventButton;
