import EditClub from "@/Components/Club/EditClub";
import EventContainer from "@/Components/Events/EventContainer";
import PostSection from "@/Components/Posts/PostContainer";
import Pagination from "@mui/material/Pagination/Pagination";
import React from "react";
import MainLayout from '@/Layouts/MainLayout';
import {SportClub} from "@/Models/club";

function EditClubPage({club}: { club: SportClub }) {
    return (
        <MainLayout title='Edit Club'>
            <div className="container mx-auto p-6">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Club and Event Management
                </h1>
                <EditClub club={club}/>

                {/*
                <EventContainer />

                <PostSection/>

                <Pagination/>

                */}
            </div>
        </MainLayout>
    );
}

export default EditClubPage;
