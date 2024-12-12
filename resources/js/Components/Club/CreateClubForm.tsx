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
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Create New Club</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Club Name</label>
          <input
            type="text"
            name="name"
            value={clubData.name}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter the club name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Club Type</label>
          <input
            type="text"
            name="type"
            value={clubData.type}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter the type of sport"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Club Address</label>
          <input
            type="text"
            name="address"
            value={clubData.address}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Enter the club's address"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Club Member Count</label>
          <input
            type="number"
            name="clubCount"
            value={clubData.clubCount}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Number of members"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-300 text-white rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Create Club
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateClubForm;
