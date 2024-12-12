import CreateClubForm from '@/Components/Club/CreateClubForm';
import React, { useState } from 'react';

interface Club {
  name: string;
  type: string;
  address: string;
  clubCount: number;
}

const ClubPage: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Handle the creation of a new club
  const handleCreateClub = (newClub: Club) => {
    setClubs([...clubs, newClub]);
    setShowCreateForm(false);  // Close the form after submission
  };

  // Handle canceling the form
  const handleCancel = () => {
    setShowCreateForm(false);  // Close the form without saving
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Club Management</h1>

      {/* Display the "Create Club" form or button */}
      {showCreateForm ? (
        <CreateClubForm onCreateClub={handleCreateClub} onCancel={handleCancel} />
      ) : (
        <button
          onClick={() => setShowCreateForm(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Create New Club
        </button>
      )}

      {/* Display the list of clubs */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Clubs List</h2>
        <div className="space-y-6">
          {clubs.length === 0 ? (
            <p className="text-gray-500">No clubs available. Create a new one!</p>
          ) : (
            clubs.map((club, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800">{club.name}</h3>
                <p className="text-sm text-gray-600">{club.type}</p>
                <p className="text-sm text-gray-600">{club.address}</p>
                <p className="text-sm text-gray-600">{club.clubCount} members</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubPage;
