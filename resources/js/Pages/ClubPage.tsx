import React from 'react';
import ClubInfo from '../Components/ClubPage/ClubInfo';
import MainLayout from "@/Layouts/MainLayout";
import {SportClub} from "@/Models/club";

function ClubPage({ club }: { club: SportClub }): JSX.Element {
    return <ClubInfo club={club} />
}

ClubPage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default ClubPage;
