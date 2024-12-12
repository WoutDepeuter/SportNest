import EventContainer from '@/Components/Events/EventContainer';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Club and Event Management</h1>

      <EventContainer />
    </div>
  );
};

export default MainPage;
