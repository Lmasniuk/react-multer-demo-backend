const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer')

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const uploadedfileName = uniqueSuffix + '-' + file.originalname;
        cb(null,uploadedfileName)
    }
})

const upload = multer({storage: storage})

app.get('/', (req, res) => {
    res.send('Yo dawg');
})

app.post('/upload', upload.single('imageFile'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    res.json({
        message: "File successfully uploaded!"
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})