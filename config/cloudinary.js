// Import Cloudinary library and use its v2 API version
// v2 is the latest and recommended version
const cloudinary = require("cloudinary").v2;
// Load environment variables from .env file into process.env
// This allows us to securely access API keys
require("dotenv").config();
// Function to configure (initialize) Cloudinary
function configureCloudinary() {
  // Set Cloudinary credentials using environment variables
  // These values come from your .env file
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,// your cloud name
    api_key: process.env.CLOUDINARY_API_KEY,// your API key
    api_secret: process.env.CLOUDINARY_API_SECRET,// your API secret
  });
}
// Export both:
// 1. cloudinary → to use its features (upload, delete, etc.)
// 2. configureCloudinary → to initialize setup before using it
module.exports = {
  cloudinary,
  configureCloudinary,
};
