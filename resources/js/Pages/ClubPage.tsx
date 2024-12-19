import React from 'react';
import ClubInfo from '../Components/ClubPage/ClubInfo';

interface ClubData {
    name: string;
    description: string;
    website: string;
    email: string;
    phone: string;
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

export default ClubPage;
