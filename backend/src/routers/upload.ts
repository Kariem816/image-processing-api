import express from 'express';
import { promises as fs } from 'fs'

const uploadRouter = express.Router();

uploadRouter.post('/', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    const tempFile = req.files.files
    const tempPath = Object.values(tempFile)[4]

    const img = await fs.readFile(tempPath)

    await fs.writeFile(`./src/images/${req.body.name}.jpg`, img);
    console.log("new image was uploaded")
    res.send("Uploaded")
});

export default uploadRouter;
