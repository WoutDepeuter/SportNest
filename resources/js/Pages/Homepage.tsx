import React, { JSX } from 'react';
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

            <div className="flex flex-col space-y-20 mx-20 mt-20 p-5">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2 pb-4 relative w-3/4">
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">Look for the perfect Club</span>
                    <span
                        className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"></span>
                </h1>
            </div>
            <FilterClubsComponent/>
        </div>
    );
}

Homepage.layout = (page: React.ReactNode) => <MainLayout children={page}/>;

export default Homepage;
