const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer')

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const uploadedfileName = uniqueSuffix + '-' + file.originalname;
        cb(null, uploadedfileName)
    }
})

const upload = multer({ storage: storage }).single('imageFile')

app.get('/', (req, res) => {
    res.send('Yo dawg');
})

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.status(400).json({ error: 'Multer error: ' + err.message });
        } else if (err) {
            res.status(500).json({ error: 'An unknown error occurred: ' + err.message });
        } else {
            res.json({
                message: "File successfully uploaded!"
            });
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})