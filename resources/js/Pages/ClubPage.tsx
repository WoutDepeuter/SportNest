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
    equipment: string[];
    events: string[];
    reviews: string[];
}

function ClubPage({ club }: { club: ClubData }): JSX.Element {
    const { name, description, website, email, phone, equipment, events, reviews } = club;

    return (
        <div>
            {/* Club Information */}
            <ClubInfo
                name={name}
                description={description}
                website={website}
                email={email}
                phone={phone}
                equipment={equipment}
                events={events}
                reviews={reviews}
            />
        </div>
    );
}

// Layout wrapper
ClubPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default ClubPage;
