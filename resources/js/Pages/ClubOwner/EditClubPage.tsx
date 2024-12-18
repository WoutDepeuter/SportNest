import DeleteButton from "@/Components/Buttons/delete_button";
import BasicRating from "@/Components/Buttons/Rating";
import Rating from "@/Components/Buttons/Rating";
import CreateClubForm from "@/Components/Club/CreateClubForm";
import ContactInfo from "@/Components/ClubPage/ContactInfo";
import EventContainer from "@/Components/Events/EventContainer";
import DeleteClubPopup from "@/Components/Popups/DeleteClub";
import PostSection from "@/Components/Posts/PostContainer";
import React, { useState } from "react";

const MainPage: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null); // State to hold the rating value

    // Handler function to update the rating value
    const handleRatingChange = (
        event: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setRating(newValue); // Update the rating value based on user selection
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleDeleteClub = () => {
        console.log("Club deleted!");
        // Add your deletion logic 
    };
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Club and Event Management
            </h1>
            {/* <ContactInfo website={"test.com"} email={"test@test.com"} phone={"0433333333"}/> */}
            <div>
                {/* <button onClick={() => setModalOpen(true)}>Delete Club</button> */}
                <DeleteButton onClick={() => setModalOpen(true)}/>
                <DeleteClubPopup
                    open={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onDelete={handleDeleteClub}
                    clubName="Football Club"
                />
            </div>
            <EventContainer />

            <PostSection />
            <BasicRating value={rating} onChange={handleRatingChange} />
        </div>
    );
};

export default MainPage;
