import React, { useState } from "react";
import DeleteClubPopup from "../Popups/DeleteClub";
import { Pagination } from "@mui/material";
import { SportClub } from "@/Models/club";
import { useForm } from "@inertiajs/react";
import { VisitOptions } from "@inertiajs/core";

const regex = /([\d.]+)°([\d.]+)'([\d.]+)\"([ns])\s([\d.]+)°([\d.]+)'([\d.]+)\"([eo])/i;

function EditClub({ club }: { club: SportClub }) {
    const {
        data,
        setData,
        delete: destroy,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm(club);

    const [clubImages, setClubImages] = useState<File[]>([]); // To hold images
    const [imagePreview, setImagePreview] = useState<string[]>([]); // To hold image previews
    const [isModalOpen, setModalOpen] = useState(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files);

            // Update clubImages state to hold all selected images
            setClubImages((prevImages) => [...prevImages, ...newImages]);

            // Generate previews for the selected images
            const newPreviews = newImages.map((file) =>
                URL.createObjectURL(file)
            );

            // Update imagePreview state to hold all previews
            setImagePreview((prevPreviews) => [
                ...prevPreviews,
                ...newPreviews,
            ]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!regex.test(data.address.coords)) {
            // TODO: Notification idk??
            return;
        }

        put(route("club.update"), {
            preserveScroll: true,
            onError: (e) => {
                console.log(e);
            },
        });
    };

    const handleDeleteClub = () => {
        destroy(route("club.delete", club.id), {
            preserveScroll: true,
            onError: (e) => {
                console.log(e);
            },
        });
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Edit Club Profile</h2>
            <form onSubmit={handleSubmit}>
                {/* Club Name Input */}
                <div className="mb-4">
                    <label
                        htmlFor="clubName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Club Name
                    </label>
                    <input
                        id="clubName"
                        type="text"
                        value={data.name}
                        onChange={(event) => setData("name", event.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="clubAddress"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Club Address
                    </label>
                    <input
                        id="clubAddress"
                        type="text"
                        value={data.address.address}
                        onChange={(event) => setData("address", { ...data.address, address: event.target.value })}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="flex flex-row justify-between space-x-5">
                    <div className="mb-4 w-full">
                        <label
                            htmlFor="clubNr"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Address Nr
                        </label>
                        <input
                            id="clubNr"
                            type="text"
                            value={data.address.nr}
                            onChange={(event) => setData("address", {...data.address, nr: event.target.value})}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4 w-full">
                        <label
                            htmlFor="clubPostcode"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Postcode
                        </label>
                        <input
                            id="clubPostcode"
                            type="text"
                            value={data.address.postcode}
                            onChange={(event) => setData("address", {...data.address, postcode: event.target.value})}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4 w-full">
                        <label
                            htmlFor="clubCoords"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Coordinates
                        </label>
                        <input
                            id="clubCoords"
                            type="text"
                            value={data.address.coords}
                            onChange={(event) => setData("address", {...data.address, coords: event.target.value})}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                </div>

                {/* Club URL Input */}
                <div className="mb-4">
                    <label
                        htmlFor="clubUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Club Website URL
                    </label>
                    <input
                        id="clubUrl"
                        type="text"
                        value={data.website_url}
                        onChange={(e) => setData("website_url", e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium mb-2">CLUB PICTURES</div>
                    <div className="grid grid-cols-5 gap-2">
                        {/* Render Image Previews */}
                        {imagePreview.map((preview, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden"
                            >
                                <img
                                    src={preview}
                                    alt={`Preview ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        {/* Add Pictures Button */}
                        <label className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md cursor-pointer">
                            <span className="text-gray-500 text-xl font-bold">+</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                multiple
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Save Club Info
                    </button>

                    <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    >
                        Delete Club
                    </button>
                </div>

                <DeleteClubPopup
                    open={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onDelete={handleDeleteClub}
                    clubName={data.name}
                />
            </form>
        </>
    );
}

export default EditClub;
