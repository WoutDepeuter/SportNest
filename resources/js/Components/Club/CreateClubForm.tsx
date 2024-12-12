import React, { useState } from 'react';

interface Club {
  name: string;
  type: string;
  address: string;
  clubCount: number;
}

interface CreateClubFormProps {
  onCreateClub: (club: Club) => void;
  onCancel: () => void;
}

const CreateClubForm: React.FC<CreateClubFormProps> = ({ onCreateClub, onCancel }) => {
  const [clubData, setClubData] = useState<Club>({
    name: '',
    type: '',
    address: '',
    clubCount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClubData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateClub(clubData);
    setClubData({ name: '', type: '', address: '', clubCount: 0 }); // Reset form
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Create New Club</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Club Name</label>
          <input
            type="text"
            name="name"
            value={clubData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Club Type</label>
          <input
            type="text"
            name="type"
            value={clubData.type}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Club Address</label>
          <input
            type="text"
            name="address"
            value={clubData.address}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Club Member Count</label>
          <input
            type="number"
            name="clubCount"
            value={clubData.clubCount}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Create Club
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClubForm;
