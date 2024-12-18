import React from 'react';
import Map from '../Components/Map';
import '../../css/app.css';
import MainLayout from "@/Layouts/MainLayout";
import Clubpagebutton from "../Components/ClubPage/clubpagebutton";
import ContactInfo from "../Components/ClubPage/ContactInfo";
import ClubInfo from "@/Components/ClubPage/Clubinfo";

import ReviewContainer from "@/Components/Reviews/ReviewContainer";

function ClubPage(): JSX.Element {
    return (
        <div>
            <ClubInfo  name = "test" description = "de brusselse badminton club is een badminton club meow meow meow meow meow meow moewm meow mew"/>
            <Map/>
            <ContactInfo website="example.com" email="info@example.com" phone="123-456-7890"/>
            <Clubpagebutton label="Join Now" onClick={() => console.log("Button clicked")}/>
            <ReviewContainer/>

        </div>
    );
}

ClubPage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default ClubPage;
