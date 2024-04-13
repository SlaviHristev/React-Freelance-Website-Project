
import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const makeUpload = async (req, res) => {
    try {
        const file = req.body.file;
        const result = await cloudinary.uploader.upload(file, { folder: 'Freelance4U', resource_type: 'auto' });
        
        res.status(200).json({ imageUrl: result.secure_url });
    } catch (error) {
        console.error('Error uploading image:', error);
        
        res.status(500).json({ error: 'Internal server error' });
    }
}