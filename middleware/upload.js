const diskStorage = require("./multer.js");

const multer = require("multer");

const upload = multer({ storage: diskStorage });

module.exports = upload;
