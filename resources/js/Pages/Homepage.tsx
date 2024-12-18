import React from 'react';
import Map from '../Components/Map'; // Import the Map component
import '../../css/app.css';
import MainLayout from "@/Layouts/MainLayout";
import FilterClubsComponent from "@/Components/Filter/FilterComponent";

function Homepage(): JSX.Element {
    return (
        <div className="flex flex-col w-full flex-grow">
            <div className="relative flex items-center justify-center w-screen h-[31.25rem] p-2 bg-cover bg-center mx-auto" style={{ backgroundImage: "url('/images/homepage/Sport-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <a href="/quiz/"
                className="absolute bottom-4 bg-red-500 text-white font-bold py-4 px-8 rounded hover:bg-red-600">
                Take Quiz
            </a>
            </div>

            <div className="flex flex-grow justify-center items-center m-5 p-5">
                <Map />
            </div>

            <FilterClubsComponent />

        </div>
    );
}

Homepage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default Homepage;
