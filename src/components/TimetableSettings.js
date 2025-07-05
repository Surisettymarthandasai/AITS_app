import React, { useState } from 'react';
import axios from 'axios';

const TimetableSettings = () => {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append('imageUrl', image);
        formData.append('userId', 'YOUR_USER_ID'); // Replace with actual user ID

        try {
            await axios.post('/api/timetable/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Timetable uploaded successfully!');
        } catch (error) {
            console.error('Error uploading timetable:', error);
            alert('Failed to upload timetable.');
        }
    };

    return (
        <div className="timetable-settings">
            <h2>Timetable Settings</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {previewUrl && <img src={previewUrl} alt="Timetable Preview" />}
            <button onClick={handleUpload}>Upload Timetable</button>
        </div>
    );
};

export default TimetableSettings;