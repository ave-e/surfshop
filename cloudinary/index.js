const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dv7losh4e',
  api_key: '321528114826138',
  api_secret: process.env.CLOUDINARY_SECRET
});
const CloudinaryStorage = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'surf-shop',
  allowedFormats: ['jpeg', 'jpg', 'png'],
  transformation: [{ width: 800, height: 600, crop: "limit" }],
  filename: function (req, file, cb) {
    let buf = crypto.randomBytes(16);
    buf = buf.toString('hex');
    let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
    uniqFileName += buf;
    cb(undefined, uniqFileName );
  }
});

module.exports = {
  cloudinary,
  storage
}
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const storage = new cloudinaryStorage({
//   cloudinary,
//   params: {
//   folder: 'surf-shop',
//   allowedFormats: ['jpeg', 'jpg', 'png','gif', 'avi']}
  
//   filename: function (req, file, cb) {
//     let buf = crypto.randomBytes(16);
//     buf = buf.toString('hex');
//     let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
//     // let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png|\.gif|\.avi|\.mov|\.mp4/ig, '');
//     uniqFileName += buf;
//     // return cb(null, uniqFileName);
//     // cb(undefined, uniqFileName );
//     cb(null, uniqFileName);
//   }
// });

// module.exports = {
//   cloudinary,
//   storage
// }






// const crypto = require('crypto');
// const cloudinary = require('cloudinary');

// cloudinary.config({
//   cloud_name: 'dv7losh4e',
//   api_key: '321528114826138',
// 	api_secret: process.env.CLOUDINARY_SECRET
// });
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const storage = cloudinaryStorage({
//   cloudinary,
//   folder: 'surf-shop',
//   allowedFormats: ['jpeg', 'jpg', 'png','gif', 'avi' ],
//   // storageTransforms = {transformation: {format: 'jpeg', 'jpg', 'png','gif', 'avi' width: 1280, crop: "scale"}};

//   transformation: [{ width: 800, height: 600, crop: "limit" }],
//   filename: function (req, file, cb) {
//   	let buf = crypto.randomBytes(16);
//   	buf = buf.toString('hex');
//   	let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
//     // let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png|\.gif|\.avi|\.mov|\.mp4/ig, '');
//   	uniqFileName += buf;
//     cb(undefined, uniqFileName );
//   }
// });

// module.exports = {
// 	cloudinary,
// 	storage
// }