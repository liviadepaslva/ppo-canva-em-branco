const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        // renomeia o arquivo com base na data e hora
        const now = new Date();
        const dateTime =
            now.getFullYear() + "-" +
            String(now.getMonth() + 1).padStart(2, '0') + "-" +
            String(now.getDate()).padStart(2, '0') + "_" +
            String(now.getHours()).padStart(2, '0') + "-" +
            String(now.getMinutes()).padStart(2, '0') + "-" +
            String(now.getSeconds()).padStart(2, '0');

        cb(null, `${file.fieldname}_${dateTime}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) { // png , jpeg , webp e gif pode
            cb(null, true);
        } else {
            cb(new Error('Apenas arquivos de imagem são permitidos'), false);
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // limite de 5mb
    }
});

module.exports = upload;