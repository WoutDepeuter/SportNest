import ReviewContainer from "@/Components/Reviews/ReviewContainer";
import ContactInfo from "@/Components/ClubPage/ContactInfo";
import DecathlonEquipment from "@/Components/Equipment/DecathlonEquipment";
import Map from "@/Components/Map";
import { SportClub } from "@/Models/club";
import React, { useState } from "react";
import Reviewcard from "@/Components/Reviews/Reviewcard";
import axios from "axios";
import { useEffect } from "react";


function parseDMS(input: string): [number, number] {
    // Regular expression to extract components of the coordinates
    const regex = /([\d.]+)°([\d.]+)'([\d.]+)\"([ns])\s([\d.]+)°([\d.]+)'([\d.]+)\"([eo])/i;
    const match = input.match(regex);

    if (!match) {
        // TODO: Communicate with user
        return [0, 0]
    }

    const [_, latDeg, latMin, latSec, latDir, lonDeg, lonMin, lonSec, lonDir] = match;

    // Convert latitude and longitude to decimal degrees
    const latitude = (parseFloat(latDeg) + parseFloat(latMin) / 60 + parseFloat(latSec) / 3600) * (latDir.toLowerCase() === 's' ? -1 : 1);
    const longitude = (parseFloat(lonDeg) + parseFloat(lonMin) / 60 + parseFloat(lonSec) / 3600) * (lonDir.toLowerCase() === 'w' || lonDir.toLowerCase() === 'o' ? -1 : 1);

    return [latitude, Math.abs(longitude)];
}

export default function ClubInfo({ club }: { club: SportClub }) {
    const name = club.name;
    const email = ''
    const website = club.website_url
    const phone = ''

    const [reviews, setReviews] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const reviewsPerPage = 3;

    const coords = parseDMS(club.address.coords)

    const [sport, setSport] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/club/${club.id}/reviews`, {
                    params: {
                        page: currentPage,
                        limit: reviewsPerPage,
                    },
                });
                console.log(response.data);

                if (response.data && response.data.reviews) {
                    setReviews(response.data.reviews);
                    setTotalPages(response.data.totalPages || 1);
                }
            } catch (error) {
                console.error("Error fetching reviews", error);
            }
        };

        fetchReviews();
    }, [club.id, currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="max-w-screen-lg bg-white mx-auto p-6 space-y-12">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-gray-800">{name}</h1>
                <img
                    src="/path/to/banner-image.jpg" // Replace with the actual image path -> do we store images?
                    alt="Club Banner Image"
                    className="rounded-lg mx-auto"
                />
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="w-full rounded-lg overflow-hidden">
                    <Map c1={coords[0]} c2={coords[1]} popup={name} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 bg-gray-100 shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <ContactInfo email={email || ""} website={website || ""} phone={phone || ""} sportClubId={club.id} />
                </div>

                <div className="col-span-2 bg-gray-100 shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    <div className="flex items-center justify-center flex-col space-y-4">
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <Reviewcard
                                    key={review.id}
                                    name={review.name}
                                    review={review.text}
                                    stars={review.score}
                                />
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="self-center text-lg">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-4">Filters</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Sport"
                        className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setSport(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Recommended Equipment</h2>
                <DecathlonEquipment sport={sport} category={category} />
            </div>
        </div>
    );
}
