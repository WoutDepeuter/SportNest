import BasicRating from "@/Components/Buttons/Rating";
import EditClub from "@/Components/Club/EditClub";
import EventContainer from "@/Components/Events/EventContainer";
import PostSection from "@/Components/Posts/PostContainer";
import Pagination from "@mui/material/Pagination/Pagination";
import React, { useState } from "react";
import Rating from '@/Components/Buttons/Rating';
import MainLayout from '@/Layouts/MainLayout';

const MainPage: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null); // State to hold the rating value


    const [isModalOpen, setModalOpen] = useState(false);

    const handleDeleteClub = () => {
        console.log("Club deleted!");
    };
    
  // Handler function to update the rating value
  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setRating(newValue); // Update the rating value based on user selection
  };
  return (
    <MainLayout title='Edit Club'>
            <div className="container mx-auto p-6">

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Club and Event Management

            </h1>
            <EditClub/>

            <EventContainer />

            <PostSection />

            <Pagination />

            </div>
    </MainLayout>
  );
};

export default MainPage;
