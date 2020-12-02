const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: process.env.CLOUDINARY_SECRET
});

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
  let buf = crypto.randomBytes(16);
  buf = buf.toString('hex');
  let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
  uniqFileName += buf;
  console.log(uniqFileName)
    return {
      folder: 'surf-shop',
      allowedFormats: ['jpeg', 'jpg', 'png','gif', 'avi' ],
      transformation: [{ width: 800, height: 600, crop: "limit" }],
      public_id: uniqFileName,
    };
  },
});

module.exports = {
  cloudinary,
  storage
}
