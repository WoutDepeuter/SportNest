import BasicRating from "@/Components/Buttons/Rating";
import EditClub from "@/Components/Club/EditClub";
import EventContainer from "@/Components/Events/EventContainer";
import PostSection from "@/Components/Posts/PostContainer";
import Pagination from "@mui/material/Pagination/Pagination";
import React, { useState } from "react";
    
const MainPage: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null); // State to hold the rating value


    const [isModalOpen, setModalOpen] = useState(false);

    const handleDeleteClub = () => {
        console.log("Club deleted!");
    };
    return (
        <div className="container mx-auto p-6">

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Club and Event Management

            </h1>
            <EditClub/>
            
            <EventContainer />

            <PostSection />

            <Pagination />
            
        </div>
    );
};

export default MainPage;
