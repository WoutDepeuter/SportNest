import React from 'react';
import Map from '../Components/Map';
import '../../css/app.css';
import MainLayout from "@/Layouts/MainLayout";
import Clubpagebutton from "../Components/ClubPage/clubpagebutton";
import ContactInfo from "../Components/ClubPage/ContactInfo";
import ClubInfo from "@/Components/ClubPage/Clubinfo";
import ReviewContainer from "@/Components/Reviews/ReviewContainer";
import { LeaveReviewButton } from "@/Components/ClubPage/Genericbutton";
import ReportButton from "@/Components/ClubPage/ReportButton";

interface ClubData {
    name: string;
    description: string;
    website: string;
    email: string;
    phone: string;
    map_coords: {
        lat: number;
        lng: number;
    };
}

function ClubPage({ club }: { club: ClubData }): JSX.Element {
    return (
        <div>
            {/* Club Information */}
            <ClubInfo name={club.name} description={club.description} />

            {/* Contact Information */}
            <ContactInfo website={club.website} email={club.email} phone={club.phone} />

            {/* Reviews Section */}
            <section className="my-8">
                <ReviewContainer />
            </section>

            {/* Placeholder Sections */}
            <section className="my-8">
                <h1 className="text-4xl font-extrabold">Equipment</h1>
                {/* Add equipment content here */}
            </section>

            <section className="my-8">
                <h1 className="text-4xl font-extrabold">Events and Training</h1>
                {/* Add events and training content here */}
            </section>
        </div>
    );
}

// Layout wrapper
ClubPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default ClubPage;
