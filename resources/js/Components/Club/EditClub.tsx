import React, { useState } from 'react';

const EditClub = () => {
  const [clubName, setClubName] = useState('');
  const [clubDescription, setClubDescription] = useState('');
  const [clubImages, setClubImages] = useState<File[]>([]); // To hold images
  const [imagePreview, setImagePreview] = useState<string[]>([]); // To hold image previews

  // Handle name change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClubName(e.target.value);
  };

  // Handle description change
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setClubDescription(e.target.value);
  };

  // Handle file input change (image upload)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setClubImages(files);

      // Preview the images
      const previews = files.map(file => URL.createObjectURL(file));
      setImagePreview(previews);
    }
  };

  // Handle form submission (save data or send to backend)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to the server
    console.log({
      clubName,
      clubDescription,
      clubImages,
    });
    alert('Club information saved successfully!');
  };

  return (
      <><h2 className="text-2xl font-bold mb-4">Edit Club Profile</h2><form onSubmit={handleSubmit}>
          {/* Club Name Input */}
          <div className="mb-4">
              <label htmlFor="clubName" className="block text-sm font-medium text-gray-700">
                  Club Name
              </label>
              <input
                  id="clubName"
                  type="text"
                  value={clubName}
                  onChange={handleNameChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required />
          </div>

          {/* Club Description Input */}
          <div className="mb-4">
              <label htmlFor="clubDescription" className="block text-sm font-medium text-gray-700">
                  Club Description
              </label>
              <textarea
                  id="clubDescription"
                  value={clubDescription}
                  onChange={handleDescriptionChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  rows={4}
                  required
              ></textarea>
          </div>

          {/* Club Url Input */}
          <div className="mb-4">
              <label htmlFor="clubDescription" className="block text-sm font-medium text-gray-700">
                  Club Url to Website
              </label>
              <input
                  id="ClubUrl"
                  type="url"
                  value={clubName}
                  onChange={handleNameChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required />
          </div>

          {/* Club Image Upload */}
          <div className="mb-4">
              <label htmlFor="clubImages" className="block text-sm font-medium text-gray-700">
                  Club Pictures
              </label>
              <input
                  id="clubImages"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  multiple
                  className="mt-1 p-2 w-full border rounded-md" />
          </div>

          {/* Image Previews */}
          <div className="mb-4">
              {imagePreview.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                      {imagePreview.map((preview, index) => (
                          <img key={index} src={preview} alt={`Preview ${index}`} className="w-32 h-32 object-cover rounded-md" />
                      ))}
                  </div>
              )}
          </div>

          {/* Submit Button */}
          <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
              Save Club Info
          </button>
      </form></>
  );
};

export default EditClub;
