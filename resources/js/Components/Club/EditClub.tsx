// import React, { useState } from "react";
// import DeleteButton from "../Buttons/delete_button";
// import DeleteClubPopup from "../Popups/DeleteClub";
// import { Pagination } from "@mui/material";

// const EditClub: React.FC = () => {
//     const [clubName, setClubName] = useState("");
//     const [clubDescription, setClubDescription] = useState("");
//     const [clubUrl, setClubUrl] = useState(""); // For storing the club URL
//     const [clubImages, setClubImages] = useState<File[]>([]); // To hold images
//     const [imagePreview, setImagePreview] = useState<string[]>([]); // To hold image previews

//     // Handle name change
//     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setClubName(e.target.value);
//     };

//     // Handle description change
//     const handleDescriptionChange = (
//         e: React.ChangeEvent<HTMLTextAreaElement>
//     ) => {
//         setClubDescription(e.target.value);
//     };

//     // Handle URL change
//     const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setClubUrl(e.target.value);
//     };

//     // Handle image changes
//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const files = event.target.files;
//         if (files) {
//             const newImages = Array.from(files);

//             // Update clubImages state to hold all selected images
//             setClubImages((prevImages) => [...prevImages, ...newImages]);

//             // Generate previews for the selected images
//             const newPreviews = newImages.map((file) =>
//                 URL.createObjectURL(file)
//             );

//             // Update imagePreview state to hold all previews
//             setImagePreview((prevPreviews) => [
//                 ...prevPreviews,
//                 ...newPreviews,
//             ]);
//         }
//     };

//     // Handle form submission (save data or send to backend)
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log({
//             clubName,
//             clubDescription,
//             clubUrl,
//             clubImages,
//         });
//         alert("Club information saved successfully!");
//     };

//     const [isModalOpen, setModalOpen] = useState(false);

//     const handleDeleteClub = () => {
//         console.log("Club deleted!");
//         // Add your deletion logic
//     };

//     return (
//         <>
//             <h2 className="text-2xl font-bold mb-4">Edit Club Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Club Name Input */}
//                 <div className="mb-4">
//                     <label
//                         htmlFor="clubName"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Club Name
//                     </label>
//                     <input
//                         id="clubName"
//                         type="text"
//                         value={clubName}
//                         onChange={handleNameChange}
//                         className="mt-1 p-2 w-full border rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Club Description Input */}
//                 <div className="mb-4">
//                     <label
//                         htmlFor="clubDescription"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Club Adress
//                     </label>
//                     <input
//                         id="clubAdress"
//                         type="text"
//                         value={clubName}
//                         onChange={handleNameChange}
//                         className="mt-1 p-2 w-full border rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Club URL Input */}
//                 <div className="mb-4">
//                     <label
//                         htmlFor="clubUrl"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Club Website URL
//                     </label>
//                     <input
//                         id="clubUrl"
//                         type="url"
//                         value={clubUrl}
//                         onChange={handleUrlChange}
//                         className="mt-1 p-2 w-full border rounded-md"
//                         required
//                     />
//                 </div>

//                 {/* Club Image Upload */}
//                 <div className="mb-4">
//                     <label
//                         htmlFor="clubImages"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Club Pictures
//                     </label>
//                     <input
//                         id="clubImages"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         multiple
//                         className="mt-1 p-2 w-full border rounded-md"
//                     />
//                 </div>

//                 {/* Image Previews */}
//                 <div className="mb-4">
//                     {imagePreview.length > 0 && (
//                         <div className="grid grid-cols-2 gap-2">
//                             {imagePreview.map((preview, index) => (
//                                 <img
//                                     key={index}
//                                     src={preview}
//                                     alt={`Preview ${index}`}
//                                     className="w-32 h-32 object-cover rounded-md"
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Submit Button */}
                
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//                 >
//                     Save Club Info
//                 </button>

//                 {/* Delete Club Button */}
//                 <DeleteButton onClick={() => setModalOpen(true)} />
//                 <DeleteClubPopup
//                     open={isModalOpen}
//                     onClose={() => setModalOpen(false)}
//                     onDelete={handleDeleteClub}
//                     clubName={clubName}
//                 />

                
               
//             </form>
//         </>
        
//     );
// };

// export default EditClub;


import React, { useState } from "react";
import DeleteClubPopup from "../Popups/DeleteClub";
import { Pagination } from "@mui/material";

const EditClub: React.FC = () => {
    const [clubName, setClubName] = useState("");
    const [clubAdress, setClubAdress] = useState(""); // For storing the club URL
    const [clubUrl, setClubUrl] = useState(""); // For storing the club URL
    const [clubImages, setClubImages] = useState<File[]>([]); // To hold images
    const [imagePreview, setImagePreview] = useState<string[]>([]); // To hold image previews
    const [isModalOpen, setModalOpen] = useState(false);

    // Handle name change
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClubName(e.target.value);
    };

    const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClubAdress(e.target.value);
    };



    // Handle URL change
    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClubUrl(e.target.value);
    };

    // Handle image changes
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

    // Handle form submission (save data or send to backend)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            clubName,
            clubAdress,
            clubUrl,
            clubImages,
        });
        alert("Club information saved successfully!");
    };

    const handleDeleteClub = () => {
        console.log("Club deleted!");
        // Add your deletion logic
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
                        value={clubName}
                        onChange={handleNameChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                {/* Club Description Input */}
                <div className="mb-4">
                    <label
                        htmlFor="clubAdress"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Club Adress
                    </label>
                    <input
                        id="clubAdress"
                        type="text"
                        value={clubAdress}
                        onChange={handleAdressChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
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
                        type="url"
                        value={clubUrl}
                        onChange={handleUrlChange}
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
                    clubName={clubName}
                />
            </form>
        </>
    );
};

export default EditClub;
