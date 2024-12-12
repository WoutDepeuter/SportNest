import BasicRating from '@/Components/Buttons/Rating';
import Rating from '@/Components/Buttons/Rating';
import EventContainer from '@/Components/Events/EventContainer';
import PostSection from '@/Components/Posts/PostContainer';
import React, { useState } from 'react';

const MainPage: React.FC = () => {

    const [rating, setRating] = useState<number | null>(null); // State to hold the rating value

  // Handler function to update the rating value
  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue); // Update the rating value based on user selection
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Club and Event Management</h1>

      <EventContainer />

      <PostSection />
      <BasicRating value={rating} onChange={handleRatingChange} />

    </div>
  );
};

export default MainPage;
