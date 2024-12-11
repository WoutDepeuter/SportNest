// Homepage.tsx
import { Head } from '@inertiajs/react';
import React from 'react';
import Map from '../Components/Map'; // Import the Map component
import '../../css/app.css';
import '../../css/homepage.css';

export default function Homepage(): JSX.Element {
    return (
        <>
            <head>
                <title>Homepage</title>
                <meta name="description" content="Homepage"></meta>
            </head>
            <body>
                <nav>
                    {/* insert navbar react component here */}
                </nav>
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                    {/* insert banner and button here */}
                </div>
                <div className="searchbar">
                    {/* insert searchbar react component here */}
                </div>
                <div className="reaserch-form">
                    <select name="Sport">
                        <option value="">Select a sport</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Rugby">Rugby</option>
                        <option value="Hockey">Hockey</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Athletics">Athletics</option>
                        <option value="Badminton">Badminton</option>
                    </select>
                    <select name="region">
                        <option value="">Select a region</option>
                        <option value="Anderlecht">Anderlecht</option>
                        <option value="Auderghem">Auderghem</option>
                        <option value="Berchem-Sainte-Agathe">Berchem-Sainte-Agathe</option>
                        <option value="Bruxelles">Bruxelles</option>
                        <option value="Etterbeek">Etterbeek</option>
                        <option value="Evere">Evere</option>
                        <option value="Forest">Forest</option>
                        <option value="Ganshoren">Ganshoren</option>
                        <option value="Ixelles">Ixelles</option>
                        <option value="Jette">Jette</option>
                        <option value="Koekelberg">Koekelberg</option>
                        <option value="Molenbeek-Saint-Jean">Molenbeek-Saint-Jean</option>
                        <option value="Saint-Gilles">Saint-Gilles</option>
                        <option value="Saint-Josse-ten-Noode">Saint-Josse-ten-Noode</option>
                        <option value="Schaerbeek">Schaerbeek</option>
                        <option value="Uccle">Uccle</option>
                        <option value="Watermael-Boitsfort">Watermael-Boitsfort</option>
                        <option value="Woluwe-Saint-Lambert">Woluwe-Saint-Lambert</option>
                        <option value="Woluwe-Saint-Pierre">Woluwe-Saint-Pierre</option>
                    </select>
                    <select name="time">
                        <option value="">Select a time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>

                {/* Map Component */}
                <Map />

                {/* insert Footer react component here*/}
            </body>
        </>
    );
}
