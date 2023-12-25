import { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Set the selected image and create a preview URL
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
  
      try {
        await axios.post('/api/upload', formData);
  
        // Add logic for handling success (e.g., updating user profile)
        console.log('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image', error);
      }
    }
  };
  

  return (
    <div className="mt-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2"
      />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className="mb-2 max-w-full h-auto"
        />
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUploader;
