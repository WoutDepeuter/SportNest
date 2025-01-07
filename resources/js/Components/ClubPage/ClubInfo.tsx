import ReviewContainer from "@/Components/Reviews/ReviewContainer";
import ContactInfo from "@/Components/ClubPage/ContactInfo";
import DecathlonEquipment from "@/Components/Equipment/DecathlonEquipment";
import Map from "@/Components/Map";
import { SportClub } from "@/Models/club";
import React, { useState } from "react";

function parseDMS(input: string): [number, number] {
    // Regular expression to extract components of the coordinates
    const regex = /([\d.]+)°([\d.]+)'([\d.]+)\"([ns])\s([\d.]+)°([\d.]+)'([\d.]+)\"([eo])/i;
    const match = input.match(regex);

    if (!match) {
        // TODO: Communicate with user
        return [0, 0];
    }

    const [_, latDeg, latMin, latSec, latDir, lonDeg, lonMin, lonSec, lonDir] = match;

    // Convert latitude and longitude to decimal degrees
    const latitude = (parseFloat(latDeg) + parseFloat(latMin) / 60 + parseFloat(latSec) / 3600) * (latDir.toLowerCase() === 's' ? -1 : 1);
    const longitude = (parseFloat(lonDeg) + parseFloat(lonMin) / 60 + parseFloat(lonSec) / 3600) * (lonDir.toLowerCase() === 'w' || lonDir.toLowerCase() === 'o' ? -1 : 1);

    return [latitude, Math.abs(longitude)];
}

export default function ClubInfo({ club }: { club: SportClub }) {
    const name = club.name;
    const email = '';
    const website = club.website_url;
    const phone = '';

    const coords = parseDMS(club.address.coords);

    const [sport, setSport] = useState("");
    const [category, setCategory] = useState("");

    const options = [
        { label: 'Badminton', sport: 'badminton', category: 'raquettes-de-badminton' },
        { label: 'Basketball', sport: 'basketball', category: 'ballons-de-basketball' },
        { label: 'Tennis', sport: 'tennis', category: 'materiel-de-tennis' },
        { label: 'Swimming', sport: 'natation', category: 'equipement' },
        { label: 'Football', sport: 'football', category: 'chaussures-de-football' },
        { label: 'Baseball', sport: 'baseball-softbal', category: 'battes' },
        { label: 'Golf', sport: 'golf', category: 'clubs' },
        { label: 'Cycling', sport: 'velo', category: 'velos' },
        { label: 'Boxing', sport: 'boxe', category: 'gants-de-boxe-mitaines-sous-gants' },
        { label: 'Volleyball', sport: 'volleyball', category: 'chaussures' },
        { label: 'Rugby', sport: 'rugby', category: 'chaussures' },
        { label: 'Hockey', sport: 'hockey', category: 'sticks' },
        { label: 'Table Tennis', sport: 'tennis-de-table', category: 'raquettes' }
    ];

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = options.find(option => option.sport === e.target.value);
        if (selectedOption) {
            setSport(selectedOption.sport);
            setCategory(selectedOption.category);
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto p-6 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold">{name}</h1>
                <img
                    src="/path/to/banner-image.jpg" // Replace with the actual image path
                    alt="Club Banner"
                    className="rounded-lg shadow-md mx-auto"
                />
            </div>

            <div className="w-full flex flex-row items-center justify-center p-5 bg-gray-100 rounded-2xl">
                <Map c1={coords[0]} c2={coords[1]} popup={name} />
            </div>

            {/* Location and Contact Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                    {/* Contact Information */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
                        <ContactInfo email={email || ''} website={website || ''} phone={phone || ''} />
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    {/* <ReviewContainer/> */}
                </div>
            </div>

            <div>
                <div className="mb-4 flex flex-col justify-start space-y-2 rounded bg-white p-5 shadow-sm ring-1 ring-inset ring-gray-300">
                    <div className="flex min-w-full flex-row items-center justify-between">
                        <select
                            className="m-1 flex w-40 grow flex-row rounded-md bg-slate-200 p-2"
                            value={sport}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select a sport</option>
                            {options.map(option => (
                                <option key={option.sport} value={option.sport}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex flex-grow justify-center items-center m-10 p-5 rounded-lg">
                <div className="w-full">
                    <DecathlonEquipment sport={sport} category={category} />
                </div>
            </div>
        </div>
    );
}
