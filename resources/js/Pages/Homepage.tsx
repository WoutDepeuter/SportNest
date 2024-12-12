import React from 'react';
import Map from '../Components/Map'; // Import the Map component
import '../../css/app.css';
import MainLayout from "@/Layouts/MainLayout";

function Homepage(): JSX.Element {
    return (
        <div className="flex flex-col w-full flex-grow">
            <div className="relative flex items-center justify-center h-4/5 p-2">
                {/* TODO: Find better image, make smaller, idk how */}
                <img src="/images/Sport-banner.jpg" alt="Banner image"
                     className="rounded-2xl shadow w-full h-full object-cover"/>
                <a href="/quiz/"
                    className="absolute bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transform -rotate-30">
                    Take Quiz
                </a>
            </div>


            {/* TODO: Homepage */}
        </div>
    );
}

Homepage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default Homepage;
